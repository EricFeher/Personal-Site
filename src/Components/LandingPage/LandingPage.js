import "../css/LandingPage.css"
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from "react";


function LandingPage() {
  const [words, setWords] = useState([])

  useEffect(()=>{
    let typeWords = ["Software Developer", "Nem tudom mi vagyok még"]
    setWords(typeWords)

  },[])

  return (
  <>
    <section class="landingPageController">
      
      <div id="detailContainer">
        <div id="alma">
          <div id="fullname">Erik Fehér</div>
          <div id="description"><Typewriter words={words} loop={999} typeSpeed={100} deleteSpeed={100} delaySpeed={1000} cursor/></div>
        </div>
      </div>
      <div id="pictureContainer">
        <img id="profilePicture" src="/images/profile.png" alt="Erik"/>
      </div>
      <div id="repulo1"></div>
      <div id="repulo2"></div>
      <div id="repulo3"></div>
    </section>
  </>
  );
}

export default LandingPage;