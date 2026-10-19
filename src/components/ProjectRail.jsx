
import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./ProjectRail.css";

function ProjectRail({ title, items }) {
  const railRef = useRef(null);
  const targetIndexRef = useRef(0);
  const animationRef = useRef(null);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const getMetrics = useCallback(() => {
    const el = railRef.current;
    if (!el) return null;

    const card = el.querySelector(".rail-card");
    if (!card) return null;

    const cardWidth = card.getBoundingClientRect().width;
    const styles = window.getComputedStyle(el);
    const gap =
      parseFloat(styles.columnGap) || parseFloat(styles.gap) || 0;

    const step = cardWidth + gap;
    const maxIndex = Math.max(
      0,
      Math.round((el.scrollWidth - el.clientWidth) / step)
    );

    return { el, step, maxIndex };
  }, []);

  const update = useCallback(() => {
    const metrics = getMetrics();
    if (!metrics) {
      setCanLeft(false);
      setCanRight(false);
      return;
    }

    const { el, step, maxIndex } = metrics;
    const currentIndex = Math.round(el.scrollLeft / step);

    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);

    // Keep the target synchronized when the user scrolls manually.
    if (!animationRef.current) {
      targetIndexRef.current = Math.min(currentIndex, maxIndex);
    }
  }, [getMetrics]);

  const scrollRail = (dir) => {
    const metrics = getMetrics();
    if (!metrics) return;

    const { el, step, maxIndex } = metrics;

    // Continue from the previous target, even during animation.
    const currentIndex = Math.round(el.scrollLeft / step);

    if (!animationRef.current) {
      targetIndexRef.current = currentIndex;
    }

    const nextIndex = Math.max(
      0,
      Math.min(maxIndex, targetIndexRef.current + dir)
    );

    targetIndexRef.current = nextIndex;

    el.scrollTo({
      left: nextIndex * step,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    update();

    const handleScroll = () => {
      update();

      // Finish tracking when the rail reaches its target.
      const metrics = getMetrics();
      if (
        metrics &&
        Math.abs(el.scrollLeft - targetIndexRef.current * metrics.step) < 2
      ) {
        animationRef.current = null;
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", update);
    };
  }, [items, update, getMetrics]);

  return (
    <div className="rail-block">
      <div className="rail-header">
        <h2 className="rail-heading">{title}</h2>

        {(canLeft || canRight) && (
          <div className="rail-arrows">
            <button
              type="button"
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
              type="button"
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
                style={
                  p.image
                    ? { backgroundImage: `url(${p.image})` }
                    : {}
                }
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
