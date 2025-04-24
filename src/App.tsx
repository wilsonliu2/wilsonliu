import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Activities from "./components/Activities/Activities";
import Projects from "./components/Projects/Projects";

const App: React.FC = () => {
  return (
    <div className="bg-black font-sans antialiased text-gray-300 transition-colors duration-300">
      <Header />
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
