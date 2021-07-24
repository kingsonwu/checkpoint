import { Route } from "react-router";
import { Switch } from "react-router-dom";

function Body() {
  return (
    <main>
      <Switch>
        <Route
        exact={true}
        path="/"
        render={() => <p>Landing Page </p>}
        /> 

        <Route
        exact={true}
        path="/about"
        render={() => <p>About</p>}
        /> 
        
        <Route
        exact={true}
        path="/get-started"
        render={() => <p>Get Started</p>}
        /> 
        
        <Route
        exact={true}
        path="/why"
        render={() => <p>Why?</p>}
        />

      

      </Switch>


    </main>
  );
}

export default Body;
