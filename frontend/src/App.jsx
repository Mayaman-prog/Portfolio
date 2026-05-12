import { useState, useEffect } from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";
import BackToTop from "./components/BackToTop";
import useScrollProgress from "./hooks/useScrollProgress";
import useBackToTop from "./hooks/useBackToTop";
import useTheme from "./hooks/useTheme";

function App() {
  const [loading, setLoading] = useState(true);
  const progress = useScrollProgress();
  const { visible: showBackToTop, scrollToTop } = useBackToTop();
  const { dark, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <LoadingScreen visible={loading} />
      <ScrollProgress progress={progress} />
      <ThemeToggle dark={dark} onToggle={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop visible={showBackToTop} onClick={scrollToTop} />
    </div>
  );
}

export default App;
