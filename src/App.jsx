import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { SocialLinks } from "./components/SocialLinks";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
