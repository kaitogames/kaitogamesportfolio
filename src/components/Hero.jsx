import { useEffect, useRef } from "react";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      // 0 at the top, 1 after scrolling ~80% of the screen height
      const p = Math.min(window.scrollY / (window.innerHeight * 0.8), 1);
      heroRef.current?.style.setProperty("--p", p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="home" className="hero" ref={heroRef}>
      <div className="hero-bg" />
      <div className="hero-content">
        <h1 className="hero-name">Abdul Mannan Ali</h1>
        <h2 className="hero-title">Game Developer</h2>
      </div>
    </header>
  );
}

export default Hero;