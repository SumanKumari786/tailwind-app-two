import React from 'react'

function Experiance() {
  const screenWidth = window.innerWidth;
  window.addEventListener('scroll', function() { 
    const expSec = document.querySelector('.expSec');
    const connSlider= document.querySelector('.connSlider');
    const slideSection = document.querySelector('.slideSection');
    const expbg = document.querySelector('.bg');
    const heroimgbg = document.querySelector('.heroimgbg');
    const text1 = document.querySelector('.content');
    const text2 = document.querySelector('.exp-text-two');
    var hT = expSec.offsetTop;
    var sliderHeight = slideSection.offsetTop;
    var sliderRound;
    if(screenWidth >= 1200){
      sliderHeight = sliderHeight-10;
      sliderRound = sliderHeight-25;
    }
    else{
      sliderHeight = sliderHeight-100;
      sliderRound = sliderHeight-105;
    }
    // var hH = expSec.offsetHeight;
    // var wH = window.innerHeight || document.documentElement.clientHeight;
    var wS = window.scrollY;
    if(wS>= hT){
      heroimgbg.style.display = 'none';
      text1.style.display = 'none';
      text2.style.display = 'none';
    }
    else{
      heroimgbg.style.display = 'block';
      text1.style.display = 'block';
      text2.style.display = 'block';
    }
    if(wS>=(sliderHeight)){
      connSlider.classList.remove('hidden');
      expbg.style.clipPath = `circle(${100}px at center 45%)`;
      // expbg.style.opacity = 0;
      // expbg.style.clipPath = `circle(${0}px at center center)`;
    }
    else{
      connSlider.classList.add('hidden');
      expbg.style.clipPath = `circle(${100}% at center)`;
      // expbg.style.opacity = 1;
    }
    // if(wS>=sliderRound){
    //   expbg.style.opacity = 0;
    // }
    // else{
    //   expbg.style.opacity = 1;
    // }
  })

  return ( 
    <section className='expSec bg-[#354033] relative'>
      <div className='expbg'>
        <div className='min-h-screen pb-[15%] md:pb-[180px] grid place-content-end expContent text-white text-center'>
            <h2 className='text-4xl md:text-6xl font-[500]'>Experience Ecoworld</h2>
            <p className='font-[400] w-11/12 lg:w-7/12 mx-auto mt-7 text-md md:text-lg'>
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