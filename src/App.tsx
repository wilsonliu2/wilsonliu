import Introduction from "./components/Introduction";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Activities from "./components/Activities/Activities";
import Projects from "./components/Projects/Projects";

import { FloatingNav } from "./components/ui/floating-navbar.tsx";

const navItems = [
  { name: "Intro", link: "#introduction" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Activities", link: "#activities" },
  { name: "Projects", link: "#projects" },
];

const App: React.FC = () => {
  return (
    <div className="bg-black font-sans antialiased text-gray-300 transition-colors duration-300">
      <FloatingNav navItems={navItems} />

      <main>
        <Introduction />
        <Skills />
        <Experience />
        <Activities />
        <Projects />
      </main>
    </div>
  );
};

export default App;
