import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Academics from "./component/Academics";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Academics />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
