import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectRail.css";

function ProjectRail({ title, items }) {
  const railRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = () => {
    const el = railRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items]);

  const scrollRail = (dir) => {
    const el = railRef.current;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="rail-block">
      <div className="rail-header">
        <h2 className="rail-heading">{title}</h2>

        {(canLeft || canRight) && (
          <div className="rail-arrows">
            <button
              onClick={() => scrollRail(-1)}
              disabled={!canLeft}
              aria-label="Scroll left"
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
            <button
              onClick={() => scrollRail(1)}
              disabled={!canRight}
              aria-label="Scroll right"
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
      </div>

      <div className="rail" ref={railRef} onScroll={update}>
        {items.map((p) => (
          <Link
            to={`/projects/${p.slug}`}
            className="rail-card"
            key={p.slug}
          >
            <div className="rail-image-wrap">
              <div
                className="rail-image"
                style={p.image ? { backgroundImage: `url(${p.image})` } : {}}
              />
            </div>
            <div className="rail-info">
              <p className="rail-small">{p.tagline}</p>
              <h3 className="rail-title">{p.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectRail;