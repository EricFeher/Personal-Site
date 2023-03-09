import { useRef } from "react";
import "./Components/css/App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar"
import NavContext from "./Context/NavContext";

function App() {



  return (
    <>
    <div id="container">


    <div id="navbar">
            <Navbar/>
          
        </div>
        <div id="home" className="page">
          <LandingPage/>
        </div>
        <div id="about" className="page">
          2
        </div>
        <div id="projects" className="page">
          3
        </div>
        <div id="contact" className="page">
          4
        </div>
    </div>
    </>
  );
}

export default App;