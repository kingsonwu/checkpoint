// import { Form } from "react-bootstrap"
import { useState } from "react";

const Getstarted = () => {
const [currentGoal, setCurrentGoal] = useState("")
const [goals, setGoals] = useState([])

function handleChange(goal) {
    setCurrentGoal(goal) 
}
const handleSubmit = (e) => {
    e.preventDefault()
    setGoals(goals.concat(currentGoal))
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


export default Getstarted