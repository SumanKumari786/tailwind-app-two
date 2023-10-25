import { useState } from 'react'
import Header from './header';

export default function Hero() {
  
  const screenWidth = window.innerWidth;
  window.addEventListener('scroll', function() {
    var imgbg = document.querySelector('.heroimgbg');
    const heroSection = document.querySelector('.heroSection');
    var heading = document.querySelector('.tHead');
    var animateLetter = document.querySelector('.animateLetter');
    const section = document.querySelector('.section');
    const secHeight = heroSection.offsetHeight;
    const expSec = document.querySelector('.expSec');
    var text = document.querySelector('.text');
    var scrollPos = window.scrollY;
    var pText = document.querySelector('.pText');;
    var insText = document.querySelector('.insText');;
    let secPos = section.offsetTop;
    console.log(scrollPos, secPos);
    // if (screenWidth >= 992) {
    //   if(scrollPos==0){
    //     var scale = 1;
    //     heading.style.display = 'block';
    //     text.style.display = 'block';
    //     imgbg.style.opacity = 0;
    //     pText.style.opacity = 1;
    //     insText.style.opacity = 1;
    //     animateLetter.style.transform = `scale(${scale}) translate(0%, 0%)`;
    //   }
    //   else if((scrollPos<=90) && (scrollPos>0)){
    //     var scale = scrollPos/8;
    //     heading.style.display = 'none';
    //     pText.style.opacity = 0.8;
    //     insText.style.opacity = 1;
    //     animateLetter.style.transform = `scale(${scale}) translate(0%, -10%)`;
    //   }
    //   else if((scrollPos<=150) && (scrollPos>90)){
    //     var scale = scrollPos/8;
    //     heading.style.display = 'none';
    //     pText.style.opacity = 0;
    //     insText.style.opacity = 1;
    //     animateLetter.style.transform = `scale(${scale}) translate(-10.2%, -10%)`;
    //   }
    //   // else if((scrollPos<=350) && (scrollPos>150)){
    //   //   var scale = scrollPos/8;
    //   //   heading.style.display = 'none';
    //   //   pText.style.opacity = 0.2;
    //   //   insText.style.opacity = 1;
    //   //   animateLetter.style.transform = `scale(${scale}) translate(-2.5%, -10%)`;
    //   // }
    //   else{
    //     var scale = scrollPos/8;
    //     heading.style.display = 'none';
    //     text.style.display = 'none';
    //     animateLetter.style.transform = `scale(${scale}) translate(-10.2%, -10%)`;
    //     pText.style.opacity = 0;
    //     insText.style.opacity = 1;
    //   }
    // }
    // if((scrollPos>=800) && (scrollPos<=900)){
    //   imgbg.style.opacity = 0.05;
    //   animateLetter.style.opacity = 0.5;
    // }
    // else if ((scrollPos>900) && (scrollPos<=1000)){
    //   imgbg.style.opacity = 0.5;
    // } 
    // else if(scrollPos>1000){
    //   imgbg.style.opacity = 1;
    //   animateLetter.style.opacity = 0;
    //   animateLetter.style.display = 'none';
    // }
    // else{
    //   imgbg.style.opacity = 0;
    //   animateLetter.style.opacity = 1;
    //   animateLetter.style.display = 'block';
    // }


    if (screenWidth >= 992) {
      if(scrollPos==0){
        var scale = 1;
        heading.style.display = 'block';
        text.style.display = 'block';
        imgbg.style.opacity = 0;
        animateLetter.style.opacity = 1;
        animateLetter.style.transform = `scale(${scale}) translate(0%, 0%)`;
      }
      else{
        var scale = scrollPos/7;
        heading.style.display = 'none';
        text.style.display = 'none';
        animateLetter.style.transform = `scale(${scale}) translate(-7%, 20%)`;
      }
    }
    if((scrollPos>500) && (scrollPos<600)){
      imgbg.style.opacity = 0.05;
      animateLetter.style.opacity = 0.7;
    }
    else if((scrollPos>=600) && (scrollPos<700)){
      imgbg.style.opacity = 0.3;
      animateLetter.style.opacity = 0.5;
    }
    else if((scrollPos>=700) && (scrollPos<=800)){
      imgbg.style.opacity = 0.8;
      animateLetter.style.opacity = 0.1;
    }
    else if((scrollPos>800) && (scrollPos<=1000)){
      animateLetter.style.opacity = 0;
      imgbg.style.opacity = 1;
    }
    else{}
    if((scrollPos>800)){
      imgbg.style.opacity = 1;
      animateLetter.style.opacity = 0;
      animateLetter.style.display = 'none';
    }
    else{
      animateLetter.style.display = 'block';
    }


  })

  return (
    <div className="bg-[#354033] z-50 heroSection">
      <Header/>

      <div className="min-h-screen grid place-content-center contain">
          <div className="text-center heading">
            <h1 className="text-4xl md:text-6xl tracking-[0.35em] font-[500] text-white uppercase tHead" data-aos="fade-up" data-aos-duration="800">
              EcoWorld
            </h1>
            {/* <div className='animateLetter'>
              <p className="mt-6 text-md md:text-lg leading-8 font-[400] text-white" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-back" data-aos-delay="100">
                <span className='pText'>Ideas don't come out of nowhere, they come from a place. <br className='hidden lg:inline-block'></br> A place called</span> <span className='insText'>inspiration.</span></p>
            </div> */}
            <div data-aos="fade-up" data-aos-duration="1500"  data-aos-easing="ease-in-back" data-aos-delay="100">
              <p className="mt-6 text-md md:text-lg leading-8 font-[400] text-white text">
                Ideas don't come out of nowhere, they come from a place.
              </p>
              <p className='animateLetter text-lg font-[400] text-white'>A place called inspiration.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 scroll-area">
            <a href="#" className="scroll-text fixed bottom-[10%] z-50 font-[600] text-md md:text-lg leading-6 text-[#436d3d]">
              Keep Scrolling 
            </a>
            <svg className='scroll-icon fixed bottom-[6%] z-50' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg>
          </div>
        <div className="heroimgbg"></div>
      </div>
    </div>
  )
}
