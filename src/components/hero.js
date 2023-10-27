import Header from './header';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  let screenWidth = window.innerWidth;
  screenWidth = screenWidth - 600;
  window.addEventListener('scroll', function() {
    var imgbg = document.querySelector('.heroimgbg');
    const text1 = document.querySelector('.exp-text-one');
    const text2 = document.querySelector('.exp-text-two');
    text1.style.opacity = '0';
    text2.style.opacity = '0';
  //   var heading = document.querySelector('.tHead');
  //   var animateLetter = document.querySelector('.animateLetter');
  //   var text = document.querySelector('.text');
    var scrollPos = window.scrollY;
    var circle = screenWidth - scrollPos;
    console.log(screenWidth, circle)
    if(scrollPos<=600){
      imgbg.style.clipPath = `circle(${circle}px at center)`;
    }
    // console.log(scrollPos)
  //   var scale;
    if(scrollPos===0){
  //     scale = 1;
  //     heading.style.display = 'block';
  //     text.style.display = 'block';
  //     imgbg.style.opacity = 0;
  //     animateLetter.style.opacity = 1;
  //     animateLetter.style.transform = `scale(${scale}) translate(0%, 0%)`;
    } 
  // else{
  //       scale = scrollPos/7;
  //       heading.style.display = 'none';
  //       text.style.display = 'none';
  //       animateLetter.style.transform = `scale(${scale}) translate(-7%, 20%)`;
  //   }
  //   if((scrollPos>500) && (scrollPos<600)){
  //     imgbg.style.opacity = 0.05;
  //     animateLetter.style.opacity = 0.7;
  //   } else if((scrollPos>=600) && (scrollPos<700)){
  //     imgbg.style.opacity = 0.3;
  //     animateLetter.style.opacity = 0.5;
  //   } else if((scrollPos>=700) && (scrollPos<=800)){
  //     imgbg.style.opacity = 0.8;
  //     animateLetter.style.opacity = 0.1;
  //   } else if((scrollPos>800) && (scrollPos<=1000)){
  //     animateLetter.style.opacity = 0;
  //     imgbg.style.opacity = 1;
  //   }
  //   else{}
  //   if((scrollPos>800)){
  //     imgbg.style.opacity = 1;
  //     animateLetter.style.opacity = 0;
  //     animateLetter.style.display = 'none';
  //   } else{
  //     animateLetter.style.display = 'block';
  //   }
  })

  let scale = 1;
  let opacity = 0;
  let translateX = 0;
  let translateY = -10;
// Check if a "hasRun" cookie exists
const hasRunCookie = document.cookie.split(';').some((item) => item.trim().startsWith('hasRun='));

if (!hasRunCookie) {
  // Function to increment the scale of the text, translate it, and fade it out
  function zoomAndFadeText() {
      var imgbg = document.querySelector('.heroimgbg');
      // var scaleText = document.querySelector('.scaleText');
      // var iText = document.querySelector('.iText');
      // var heading = document.querySelector('.tHead');
      // var animateLetter = document.querySelector('.animateLetter');
      const textElement = document.getElementById('text');
      const letterI = document.getElementById('zoomed-letter-i');
      const letterIRect = letterI.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const targetX = centerX - letterIRect.left - letterIRect.width / 1.5;
      const targetY = centerY - letterIRect.top - letterIRect.height / 2;

      textElement.style.transform = `scale(${scale}) translate(${targetX}px, ${targetY}px)`;
      // textElement.style.transform = `scale(${scale})`;
      imgbg.style.opacity = opacity;

      // Increase the scale and translation by specific amounts
      scale += 3;
      opacity = opacity + 0.02;
      // console.log(opacity);
      // translateX -= 1;
      // translateY -= 5; 
      // if (scale >= 30) {
      //   iText.style.opacity = '1';
      //   scaleText.style.display = 'none';
      // }
      // else{
      //   iText.style.display = '0';
      //   scaleText.style.opacity = 'block';
      // }
      
      if (scale <= 150) {
          setTimeout(zoomAndFadeText, 70); // Repeat every 200 milliseconds until the scale reaches 10
      } else {
          // Once the scale reaches 10, start fading out
          textElement.style.opacity = '0';
          // document.cookie = 'hasRun=true';
      }
  }

   // Add an event listener to call the function when the page loads
   window.addEventListener('load', () => {
    // Start the animation only when the user is in the first section
    if (window.scrollY < window.innerHeight) {
      setTimeout(zoomAndFadeText, 1200); // Start the animation after a 3-second delay
    }
  });
  // Add a scroll event listener to trigger the animation when the user enters the first section
  window.addEventListener('scroll', function () {
    if (window.scrollY < window.innerHeight) {
      if (!hasRunCookie) {
        zoomAndFadeText();
      }
    }
  });
}

  return (
    <div className="bg-[#354033] z-50 heroSection">
      <Header/>
      <div className="min-h-screen grid place-content-center contain">
          <div className="text-center heading zoomed-text" id='text'>
           <div className='scaleText'>
            <h1 className="text-lg md:text-xl md:ps-[0.35em] md:tracking-[0.35em] text-white uppercase tHead" data-aos="fade-up" data-aos-duration="800">
                EcoWorld
              </h1>
              <div data-aos="fade-up" data-aos-duration="1500"  data-aos-easing="ease-in-back" data-aos-delay="100">
                <p className="mt-6 text-xs md:text-sm leading-8 text-white text px-[36px] px-md-[0]">
                Ideas don't come out of nowhere, they come from a place. <br/> A place called <span id="zoomed-letter-i" style={{display: 'inline-block'}}>i</span>nspiration.
                  </p>
              </div>
           </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 scroll-area">
            <a className="scroll-text fixed bottom-[10%] z-50 text-sm leading-6 text-[#436d3d]">
              Keep Scrolling 
            </a>
            <svg className='scroll-icon fixed bottom-[6%] z-50' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg>
          </div>
        <div className="heroimgbg"></div>
      </div>
    </div>
  )
}
