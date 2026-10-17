import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import profile from "../assets/profile.jpg";

// pixels of continuous downward scrolling before the bar hides
// (one mouse-wheel click is about 100px, so 300 is about 3 scrolls)
const HIDE_DISTANCE = 300;

// never hide while you are near the top of the page
const MIN_Y = 100;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const downDistance = useRef(0);
  const { pathname } = useLocation();

  // if already on the home page, scroll to the top instead of doing nothing
  const goHome = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastY.current;
      lastY.current = y;

      setScrolled(y > 40);

      if (y <= MIN_Y) {
        downDistance.current = 0;
        setHidden(false);
        return;
      }

      if (diff > 0) {
        downDistance.current += diff;
        if (downDistance.current > HIDE_DISTANCE) setHidden(true);
      } else if (diff < -3) {
        downDistance.current = 0;
        setHidden(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}
    >
      <NavLink to="/" className="nav-logo" aria-label="Home" onClick={goHome}>
        <img src={profile} alt="Logo" />
      </NavLink>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end onClick={goHome}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className="nav-spacer" />
    </nav>
  );
}

export default Navbar;