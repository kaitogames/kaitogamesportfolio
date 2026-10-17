import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;