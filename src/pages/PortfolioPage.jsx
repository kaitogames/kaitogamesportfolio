import "./Pages.css";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const categories = [...new Set(projects.map((p) => p.category))];

function PortfolioPage() {
  return (
    <section className="portfolio-page">
      <h1 className="page-heading">Projects</h1>

      {categories.map((cat) => (
        <div key={cat} className="category-block">
          <h2 className="category-heading">{cat}</h2>
          <div className="project-grid">
            {projects
              .filter((p) => p.category === cat)
              .map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default PortfolioPage;