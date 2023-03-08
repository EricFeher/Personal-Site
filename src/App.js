import "./Components/css/App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>

    
    <div class="container">
        <div id="navbar">
          <Navbar/>
        </div>
        <div class="page">
          <LandingPage/>
        </div>
    </div>
    </>
  );
}

export default App;