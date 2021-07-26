import { Route } from "react-router-dom";
import About from "./about/about";
import Getstarted from "./getstarted/getstarted";
import Landing from "./landing/landing";
import Why from "./why/why";
import Credits from "./credits/credits";

const Routes = () => {
    return (
      <>
        <Route
        exact={true}
        path="/"
        render={() => <Landing />}
        /> 

        <Route
        exact={true}
        path="/about"
        render={() => <About />}
        /> 
        
        <Route
        exact={true}
        path="/getstarted"
        render={() => <Getstarted />}
        /> 
        
        <Route
        exact={true}
        path="/why"
        render={() => <Why />}
        />
        <Route
        exact={true}
        path="/credits"
        render={() => <Credits />}
        />
      </>
    )
};

export default Routes;