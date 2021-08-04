// import { Form } from "react-bootstrap"
import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { connect } from 'react-redux';
import { updateGoals } from '../../redux/action';

const Getstarted = ({ goals, updateGoals }) => {

const [currentGoal, setCurrentGoal] = useState("");


function handleChange(goal) {
    setCurrentGoal(goal);
}

const handleSubmit = (e) => {
    e.preventDefault()
    updateGoals(currentGoal);
    setCurrentGoal("")
}

return (
<>
<div className = "form-container">
    <form onSubmit={handleSubmit}> {/*This will call the handlesubmit function which will update goals.*/}
        <label className = "form-text">Enter a goal</label>
        <input value={currentGoal} onChange={(e) => handleChange(e.target.value)}/> {/*Whatever is typed in here is connected to line 5.*/}
    </form>
    {goals.map(goal => <div> {goal} </div>)}
{/* <Form id = "form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className = "form-text"><h3>Enter a goal</h3></Form.Label>
    <Form.Control onChange={handleChange()} type="Goal" placeholder="Learn redux.. " />
  </Form.Group>
</Form> */}
</div>

</>
    ) 
};

const mapStateToProps = state => ({
  goals: state.goals
});

const mapDispatchToProps = dispatch => ({
  updateGoals: (goal) => dispatch(updateGoals(goal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Getstarted);