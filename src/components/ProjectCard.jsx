import { Link } from "react-router-dom";
import "./Portfolio.css";

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div
        className="project-image"
        style={
          project.image ? { backgroundImage: `url(${project.image})` } : {}
        }
      />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.tagline}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;