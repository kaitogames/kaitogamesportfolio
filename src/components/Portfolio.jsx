import { useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import { projects } from "../data/projects";

const games = projects.filter((p) => p.category === "Games").slice(0, 2);
const programming = projects
  .filter((p) => p.category === "Programming")
  .slice(0, 1);
const featured = [...games, ...programming];

function Portfolio() {
  const [index, setIndex] = useState(0);
  const total = featured.length;

  if (total === 0) return null;

  const current = featured[index];
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-heading">Projects</h2>

      <div className="feature">
        <Link
          to={`/projects/${current.slug}`}
          className="feature-slide"
          key={current.slug}
        >
          <div className="feature-text">
            <h3 className="feature-title">{current.title}</h3>
            <p className="feature-desc">{current.tagline}</p>
          </div>

          <div className="feature-image-wrap">
            <div
              className="feature-image"
              style={
                current.image
                  ? { backgroundImage: `url(${current.image})` }
                  : {}
              }
            />
          </div>
        </Link>

        <div className="feature-bar">
          <div className="feature-bar-inner">
            {total > 1 && (
              <div className="feature-controls">
                <button onClick={prev} aria-label="Previous project">←</button>

                <div className="feature-dots">
                  {featured.map((p, i) => (
                    <button
                      key={p.slug}
                      className={`dot ${i === index ? "active" : ""}`}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>

                <button onClick={next} aria-label="Next project">→</button>
              </div>
            )}

            <Link to="/portfolio" className="feature-more">
              View more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;