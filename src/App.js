// import './App.css';
import Navabar from "./Components/navabar";
import Home from "./Components/home";
import { Route,Routes } from "react-router-dom";
import About from "./Components/about";
import Contact from "./Components/contact";
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Navabar />

      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>

      <Footer/>
    </>
  );
}

export default App;
