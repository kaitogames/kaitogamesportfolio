import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-card">
        <div className="about-left">
          <img src={profile} alt="Abdul Mannan Ali" className="about-image" />
        </div>

        <div className="about-right">
          <h2 className="about-name">Abdul Mannan Ali</h2>
          <p className="about-aka">aka Kaito Game Dev</p>

          <p className="about-text">
            I'm a <span className="hl">Game Developer</span> who builds games
            with <span className="hl">Unity</span> and{" "}
            <span className="hl">C#</span>. I'm currently developing my programming skills and exploring game design.
          </p>

          <p className="about-text">
            I've worked on small games and gameplay prototypes, learning about game mechanics,
             player interaction, and bringing ideas to life through code. I'm always looking to improve my
              skills and build more ambitious projects.
          </p>

          <p className="about-text">Things I've worked on:</p>
          <ul className="about-list">
            <li>Flappy Bird Inspired Game</li>
            <li>A Simple Cube Runner</li>
            <li>A Complete Game Where You Prepare Food And Deliver</li>
          </ul>

          <a href="#portfolio" className="about-btn">
            View Projects <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;