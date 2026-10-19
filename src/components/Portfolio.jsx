
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import { projects } from "../data/projects";

const games = projects
  .filter((p) => p.category === "Games")
  .slice(0, 2);

const programming = projects
  .filter((p) => p.category === "Programming")
  .slice(0, 1);

const featured = [...games, ...programming];

function Portfolio() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [slideKey, setSlideKey] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const total = featured.length;

  const changeProject = (nextIndex, moveDirection) => {
    if (nextIndex === index || total <= 1) return;

    setDirection(moveDirection);
    setIndex(nextIndex);
    setSlideKey((key) => key + 1);
  };

  const prev = () => {
    changeProject((index - 1 + total) % total, -1);
  };

  const next = () => {
    changeProject((index + 1) % total, 1);
  };

  useEffect(() => {
    if (total <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % total);
      setSlideKey((key) => key + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [index, total]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;

    const deltaX = endX - touchStartX.current;
    const deltaY = endY - touchStartY.current;

    // Ignore vertical scrolling and short movements.
    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      next();
    } else {
      prev();
    }
  };

  if (total === 0) return null;

  const current = featured[index];

  return (
    <section id="portfolio" className="portfolio">
      <div className="feature">
        <div
          className="feature-track"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Link
            to={`/projects/${current.slug}`}
            className={`feature-slide ${
              direction > 0 ? "slide-next" : "slide-prev"
            }`}
            key={slideKey}
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
        </div>

        <div className="feature-bar">
          <div className="feature-bar-inner">
            {total > 1 && (
              <div className="feature-controls">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous project"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 5 8 12 15 19" />
                  </svg>
                </button>

                <div className="feature-dots">
                  {featured.map((project, i) => (
                    <button
                      key={project.slug}
                      type="button"
                      className={`dot ${i === index ? "active" : ""}`}
                      onClick={() =>
                        changeProject(i, i >= index ? 1 : -1)
                      }
                      aria-label={`Go to project ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next project"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 5 16 12 9 19" />
                  </svg>
                </button>
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
