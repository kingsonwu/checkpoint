import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer> 
      <li>Copyright 2021</li>
      <li><a href="https://github.com/kingsonwu/checkpoint">Github</a></li>
      <li><NavLink to = "/credits">Credits</NavLink></li>

    </footer>
  );
}

export default Footer;
