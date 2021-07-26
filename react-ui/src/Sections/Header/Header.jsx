import { NavLink } from "react-router-dom";
// import Greeting from "../../components/greeting"

const Header = () => {
  return (
    <header>
      <div><NavLink to="/">Home</NavLink></div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>

        </li>
        <li>
          <NavLink to="/getstarted">Get Started</NavLink>

        </li>
        <li>
          <NavLink to="/why"> Why?</NavLink>

        </li>
      </ul>
      {/* <Greeting /> */}
    </header>
  );
}

export default Header;
