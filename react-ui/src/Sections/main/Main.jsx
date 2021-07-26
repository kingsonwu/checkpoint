import { Switch } from "react-router-dom";
import Routes from "../../routes"
// import UsernameForm from "../../components/usernameForm";

const Main = () => {
  return (
    <main>
      <Switch>
        <Routes />
      </Switch>
    </main>
  );
}

export default Main;
