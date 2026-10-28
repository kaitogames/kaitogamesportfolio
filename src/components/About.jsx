import { Link } from "react-router-dom";
import "./About.css";
import logo from "../assets/profile.png"; // swap with your logo file if you have one

function About() {
  return (
    <section id="about" className="about">
      <img src={logo} alt="Kaito Game Dev logo" className="about-logo" />

      <h2 className="about-title">
        Hi, I'm <span className="hl">Abdul Mannan Ali</span>.
        <br />
        I make games.
      </h2>

      <p className="about-text">
        I'm a <span className="hl">Game Developer</span> who builds games with{" "}
        <span className="hl">Unity</span> and <span className="hl">C#</span>.
        I'm currently developing my programming skills and exploring game
        design.
      </p>

      <p className="about-text">
        I've worked on small games and gameplay prototypes, learning about game
        mechanics, player interaction, and bringing ideas to life through code.
        I'm always looking to improve my skills and build more ambitious
        projects.
      </p>

      <div className="about-tags">
        <span>C#</span>
        <span>Unity</span>
        <span>Game Design</span>
      </div>

      <Link to="/portfolio" className="about-btn">
        View Projects →
      </Link>
    </section>
  );
}

export default About;