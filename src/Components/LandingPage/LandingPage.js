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
    
    <section id="landingPageController">
      <div id="detailContainer">
        <div id="description">
          <span id="predescription">
            I'm a <br/>
            </span>
            <Typewriter words={words} loop={999} typeSpeed={100} deleteSpeed={100} delaySpeed={1000} cursor/>
        </div>
      </div>
      <div id="pictureContainer">
        <svg id="pictureBlob" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask" mask-type="alpha">
            <path />
          </mask>
          <g mask="url(#mask)">
            <path id="blobContent"/>
            <image id="picture" href="/images/profile.png"/>
          </g>
          
          
        </svg>
      </div>
    </section>
  </>
  );
}

export default LandingPage;