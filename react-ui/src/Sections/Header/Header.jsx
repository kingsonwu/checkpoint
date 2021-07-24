import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>Home</div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>

        </li>
        <li>
          <NavLink to="/get-started">Get Started</NavLink>

        </li>
        <li>
          <NavLink to="/why"> Why?</NavLink>

        </li>
      </ul>
    </header>
  );
}

export default Header;
