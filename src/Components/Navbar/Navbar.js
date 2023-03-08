import "../css/Navbar.css"
import {BsLinkedin, BsGithub} from "react-icons/bs"

function LandingPage() {


  return (
    <div id="navigation" class="centerAndFlex">
      <div id="name" class="centerAndFlex">
        <span>Erik Fehér</span>
      </div>
      <div id="navbuttons" class="centerAndFlex">
        <div id="navButtonsContainer">
          <div class="underline">Home</div>
          <div class="underline">About</div>
          <div class="underline">Projects</div>
          <div class="underline">Contact</div>
        </div>
      </div>
      <div id="socials" class="centerAndFlex">
        <div id="socialsContainer">
          <BsLinkedin/>
          <BsGithub/>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;