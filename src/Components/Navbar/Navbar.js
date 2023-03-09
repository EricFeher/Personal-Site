import "../css/Navbar.css"
import {BsLinkedin, BsGithub} from "react-icons/bs"
import { useContext } from "react"
import NavContext from "../../Context/NavContext"

function Navbar(props) {

  const navContext = useContext(NavContext)

  const scrollToPage = (id) => {
    document.getElementById(id).scrollIntoView(true)
  }


  return (
    <div id="navigation" className="centerAndFlex">
      <div id="name" className="centerAndFlex">
        <span>Erik Fehér</span>
      </div>
      <div id="navbuttons" className="centerAndFlex">
        <div id="navButtonsContainer">
          <div onClick={() => scrollToPage('home')} className="underline">Home</div>
          <div onClick={() => scrollToPage('about')} className="underline">About</div>
          <div onClick={() => scrollToPage('projects')} className="underline">Projects</div>
          <div onClick={() => scrollToPage('contact')} className="underline">Contact</div>
        </div>
      </div>
      <div id="socials" className="centerAndFlex">
        <div id="socialsContainer">
          <a href="https://www.linkedin.com/in/ericfeher/" target="_blank">
            <BsLinkedin/>
          </a>
          <a href="https://github.com/EricFeher" target="_blank">
            <BsGithub/>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;