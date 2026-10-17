import { Link } from "react-router-dom";
import "./Portfolio.css";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-heading">Portfolio</h2>

      <div className="project-grid">
        {projects.slice(0, 2).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="portfolio-more">
        <Link to="/portfolio" className="about-btn">
          View all <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;