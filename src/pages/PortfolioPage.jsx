import "./Pages.css";
import { projects } from "../data/projects";
import ProjectRail from "../components/ProjectRail";

const categories = [...new Set(projects.map((p) => p.category))];

function PortfolioPage() {
  return (
    <section className="portfolio-page">
      <h1 className="page-heading">Projects</h1>

      {categories.map((cat) => (
        <ProjectRail
          key={cat}
          title={cat}
          items={projects.filter((p) => p.category === cat)}
        />
      ))}
    </section>
  );
}

export default PortfolioPage;