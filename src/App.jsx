import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;