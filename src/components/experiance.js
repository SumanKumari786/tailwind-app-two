import React from 'react'

function Experiance() {
  const screenWidth = window.innerWidth;
  window.addEventListener('scroll', function() { 
    const expSec = document.querySelector('.expSec');
    const connSlider= document.querySelector('.connSlider');
    const slideSection = document.querySelector('.slideSection');
    const expbg = document.querySelector('.expbg');
    const expContent = document.querySelector('.expContent');
    const heroimgbg = document.querySelector('.heroimgbg');
    const text1 = document.querySelector('.content');
    const text2 = document.querySelector('.exp-text-two');
    const connImg = document.querySelector('.connImg');
    var hT = expSec.offsetTop;
    var sliderHeight = slideSection.offsetTop;
    var sliderH = slideSection.offsetHeight;
    connImg.style.opacity = 0;
    // if(screenWidth >= 1680){
    //   hT=hT-120;
    // }
    if(screenWidth >= 1200){
      sliderHeight = sliderHeight-10;
    }
    else{
      sliderHeight = sliderHeight-100;
    }
    var sScroll;
    if(screenWidth > 376){
      sScroll = 120;
    }
    else{
      sScroll = 80;
    }
    var wS = window.scrollY;
    if(wS> hT+sScroll){
      // setTimeout(() => {
        heroimgbg.style.display = 'none';
        text1.style.display = 'none';
        text2.style.display = 'none';
        expContent.style.display = 'none';
        connSlider.style.opacity = 1;
        connSlider.classList.remove('hidden');
        if(screenWidth >= 1025){
          expbg.style.clipPath = `circle(${125}px at center 59.2%)`;
        }
        else if((screenWidth < 1025) && (screenWidth > 769) ){
          expbg.style.clipPath = `circle(${125.6}px at 83% 58.8%)`;
        }
        else if((screenWidth < 769) && (screenWidth > 767) ){
          expbg.style.clipPath = `circle(${100}px at 83% 58.8%)`;
        }
        else{
          expbg.style.clipPath = `circle(${100}px at center 56%)`;
        }
      // }, 800);
    }
    else{
      heroimgbg.style.display = 'block';
      text1.style.display = 'block';
      text2.style.display = 'block';
      expContent.style.display = 'grid';
      connSlider.classList.add('hidden');
      connImg.style.opacity = 0;
      // connSlider.style.opacity = 0;
      expbg.style.opacity = 1;
      expbg.style.transition = '1s';
      expbg.style.clipPath = `circle(${100}% at center center)`;
    }
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

    if (bottom) {
      setTimeout(() => {
        expbg.style.opacity = 0;
        connImg.style.opacity = 1;
        expbg.style.transition = '0.1s';
      }, 1800);
    }
    else{
      expbg.style.opacity = 1;
      connImg.style.opacity = 0;
    }
    // if(screenWidth <= 1025){
      // if(wS >= sliderH){
      //   setTimeout(() => {
      //     expbg.style.opacity = 0;
      //     connImg.style.opacity = 1;
      //     expbg.style.transition = '0.1s';
      //   }, 1800);
      // }
    // }
  })

  return ( 
    <section className='expSec relative'>
      <div className='expbg'>
        <div className='min-h-screen pb-[0%] 2xl:pb-[120px] xl:pb-[0px] lg:pb-[0%] grid place-content-end expContent text-white text-center'>
            <h2 className='text-4xl md:text-6xl font-[500]'>Experience Ecoworld</h2>
            <p className='w-11/12 lg:w-10/12 xl:w-7/12 mx-auto mt-7 text-xs md:text-sm'>
            Our placemaking capabilities integrate in a dynamic workplace environment with green open spaces
            and a native landscape to inspire innovation and creativity. The campus seamlessly blends into a
            live-work-play ecosystem with diverse options for connection, collaboration and post-work unwinding.
            </p>
        </div>
      </div>
    </section>
  )
}

export default Experiance