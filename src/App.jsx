import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";
import { MyProjects } from "./components/MyProjects";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <AboutMe />
      <MyProjects />
    </div>
  );
}

export default App;
