import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { MyProjects } from "./components/MyProjects";
import { Nav } from "./components/Nav";
import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <AboutMe />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
