import Header from './header';
import React, { useEffect, useState } from 'react';

export default function Hero() {
  let screenWidth = window.innerWidth;
  screenWidth = screenWidth;
  window.addEventListener('scroll', function() {
    var imgbg = document.querySelector('.heroimgbg');
    var section = document.querySelector('.section');
    const text1 = document.querySelector('.exp-text-one');
    const text2 = document.querySelector('.exp-text-two');
    text1.style.opacity = '0';
    text2.style.opacity = '0';
    var sectionHeight = section.offsetTop;
    var circleEnd, circleStart;
    if(screenWidth>=1920){
      circleEnd = 920;
      circleStart = 1150;
    }
    else if((screenWidth<1920) && (screenWidth>=1680)){
      circleEnd = 800;
      circleStart = 1000;
    }
    else if((screenWidth<1680) && (screenWidth>=1440)){
      circleEnd = 620;
      circleStart = 850;
    }
    else if((screenWidth<1440) && (screenWidth>=1280)){
      circleEnd = 600;
      circleStart = 800;
    }
    else if((screenWidth<1280) && (screenWidth>=1024)){
      circleEnd = 600;
      circleStart = 850;
    }
    else if((screenWidth<1024) && (screenWidth>=768)){
      circleEnd = 650;
      circleStart = 820;
    }
    else if((screenWidth<768) && (screenWidth>=540)){
      circleEnd = 730;
      circleStart = 820;
    }
    else if((screenWidth<540) && (screenWidth>321)){
      circleEnd = 730;
      circleStart = 820;
    }
    else{
      circleEnd = 630;
      circleStart = 700;
    }
    var scrollPos = window.scrollY;
    var circle = circleStart - scrollPos;
    console.log(scrollPos, sectionHeight)
    if (scrollPos <= circleEnd) {
      imgbg.style.clipPath = `circle(${circle}px at center)`;
      text1.style.opacity = '0';
      text1.style.transition = '0.2s';
      text2.style.opacity = '0';
      text2.style.transition = '5s';
    }
    else{
      text1.style.opacity = '1';
      text2.style.opacity = '1';
    }
  })
  let scale = 1;
  let opacity = 0;
  const hasRunCookie = document.cookie.split(';').some((item) => item.trim().startsWith('hasRun='));
  if (!hasRunCookie) {
    function zoomAndFadeText() {
        var imgbg = document.querySelector('.heroimgbg');;
        const textElement = document.getElementById('text');
        const letterI = document.getElementById('zoomed-letter-i');
        const letterIRect = letterI.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const targetX = centerX - letterIRect.left - letterIRect.width / 1.5;
        const targetY = centerY - letterIRect.top - letterIRect.height / 2;

        textElement.style.transform = `scale(${scale}) translate(${targetX}px, ${targetY}px)`;
        imgbg.style.opacity = opacity;
        scale += 1.5;
        opacity = opacity + 0.004;
        if (scale <= 290) {
            setTimeout(zoomAndFadeText, 20); 
        } else {
            textElement.style.opacity = '0';
            imgbg.style.opacity = 1;
            document.cookie = 'hasRun=true';
        }
    }
    setTimeout(zoomAndFadeText, 3500);
  }

  return (
    <div className="bg-darkGreen z-50 heroSection">
      <Header/>
        <div className="min-h-screen grid place-content-center contain">
          <div className="text-center heading zoomed-text" id='text'>
           {!document.cookie.includes('hasRun') && ( 
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
           )}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 scroll-area">
            <a className="scroll-text fixed bottom-[10%] z-50 text-sm leading-6 text-[#436d3d]">
              Keep Scrolling 
            </a>
            <svg className='scroll-icon fixed bottom-[6%] z-50' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg>
          </div>
        </div>
        {!document.cookie.includes('hasRun') && ( 
          <div className="heroimgbg opacity-0"></div>
        )}
        {document.cookie.includes('hasRun') && ( 
          <div className="heroimgbg opacity-1"></div>
        )}
    </div>
  )
}
