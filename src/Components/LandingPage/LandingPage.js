import "../css/LandingPage.css"
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from "react";


function LandingPage() {
  const [words, setWords] = useState([])

  useEffect(()=>{
    let typeWords = ["Software Developer", "Frontend Developer", "Designer"]
    setWords(typeWords)

  },[])

  return (
  <>
    
    <section class="landingPageController">
      <div id="detailContainer">
        <div id="description">
          <span id="predescription">
            I'm a <br/>
            </span>
            <Typewriter words={words} loop={999} typeSpeed={100} deleteSpeed={100} delaySpeed={1000} cursor/>
        </div>
      </div>
      <div id="pictureContainer">
      <svg id="blob" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask" mask-type="alpha">
          <path d="M36.3,-67.2C46.4,-56.9,53.8,-46.1,60.2,-34.8C66.7,-23.5,72.4,-11.8,75.2,1.6C78.1,15,78,30,72.7,43.3C67.3,56.5,56.6,68,43.6,71C30.6,74,15.3,68.5,1,66.8C-13.3,65.1,-26.6,67.1,-39.3,63.9C-52,60.7,-64,52.3,-71.9,40.8C-79.7,29.3,-83.2,14.6,-83.8,-0.3C-84.3,-15.3,-81.8,-30.5,-72.8,-39.9C-63.7,-49.3,-48.1,-52.8,-34.9,-61.3C-21.7,-69.8,-10.8,-83.2,1.1,-85.1C13,-87,26.1,-77.4,36.3,-67.2Z"/>
        </mask>
        <g mask="url(#mask)">
          <path d="M36.3,-67.2C46.4,-56.9,53.8,-46.1,60.2,-34.8C66.7,-23.5,72.4,-11.8,75.2,1.6C78.1,15,78,30,72.7,43.3C67.3,56.5,56.6,68,43.6,71C30.6,74,15.3,68.5,1,66.8C-13.3,65.1,-26.6,67.1,-39.3,63.9C-52,60.7,-64,52.3,-71.9,40.8C-79.7,29.3,-83.2,14.6,-83.8,-0.3C-84.3,-15.3,-81.8,-30.5,-72.8,-39.9C-63.7,-49.3,-48.1,-52.8,-34.9,-61.3C-21.7,-69.8,-10.8,-83.2,1.1,-85.1C13,-87,26.1,-77.4,36.3,-67.2Z"/>
          <image id="picture" href="/images/profile.png"/>
        </g>
        
        
      </svg>
        </div>
    </section>
  </>
  );
}

export default LandingPage;