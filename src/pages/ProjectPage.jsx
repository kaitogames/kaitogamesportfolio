import { Link, useParams } from "react-router-dom";
import "./Pages.css";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-page">
        <h1 className="project-title">Project not found</h1>
        <Link to="/portfolio" className="back-link">← Back to portfolio</Link>
      </section>
    );
  }

  return (
    <section className="project-page">
      <Link to="/portfolio" className="back-link">← Back to portfolio</Link>
      <h1 className="project-title">{project.title}</h1>
      <p className="project-tagline">{project.tagline}</p>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-hero-image"
        />
      )}

      <p className="project-description">{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="about-btn"
        >
          View project <span>→</span>
        </a>
      )}
    </section>
  );
}

export default ProjectPage;