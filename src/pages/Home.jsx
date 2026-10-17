import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

function Home() {
  return (
    <>
      <div className="page-bg" />
      <Hero />
      <main className="content">
        <About />
        <Portfolio />
      </main>
    </>
  );
}

export default Home;