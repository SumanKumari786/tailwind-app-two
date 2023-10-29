import React from 'react';
import Header from './header';

const Banner = () => {
    let screenWidth = window.innerWidth;
    var a = 0;
    window.addEventListener('scroll', function () {
        const bannerBg = document.querySelector('.banner-bg');
        const oppTextOne = document.querySelector('.oppTextOne');
        const oppTextTwo = document.querySelector('.oppTextTwo');
        const extopText = document.querySelector('.extopText');
        const seamSec = document.querySelector('.seamSec');
        var scrollPos = window.scrollY;
        // var seamTop = seamSec.offsetHeight;
        // var hT = bannerBg.offsetHeight;
        var circleEnd, circleStart;
        if (screenWidth >= 1920) {
            circleEnd = 920;
            circleStart = 1150;
        }
        else if ((screenWidth < 1920) && (screenWidth >= 1680)) {
            circleEnd = 800;
            circleStart = 1000;
        }
        else if ((screenWidth < 1680) && (screenWidth >= 1440)) {
            circleEnd = 620;
            circleStart = 850;
        }
        else if ((screenWidth < 1440) && (screenWidth >= 1280)) {
            circleEnd = 600;
            circleStart = 800;
        }
        else if ((screenWidth < 1280) && (screenWidth >= 1024)) {
            circleEnd = 600;
            circleStart = 850;
        }
        else if ((screenWidth < 1024) && (screenWidth >= 768)) {
            circleEnd = 650;
            circleStart = 820;
        }
        else if ((screenWidth < 768) && (screenWidth >= 540)) {
            circleEnd = 730;
            circleStart = 820;
        }
        else if ((screenWidth < 540) && (screenWidth > 321)) {
            circleEnd = 730;
            circleStart = 820;
        }
        else {
            circleEnd = 630;
            circleStart = 700;
        }
        var circle = circleStart - scrollPos;
        if (scrollPos <= circleEnd) {
            console.log('hello');
            console.log(`circle(${circle}px at center)`)
            bannerBg.style.clipPath = `circle(${circle}px at center)`;
            oppTextOne.style.opacity = '0';
            oppTextOne.style.transition = '0.2s';
            oppTextTwo.style.opacity = '0';
            oppTextTwo.style.transition = '5s';
            extopText.style.opacity = '0';
          }
          else{
            oppTextOne.style.opacity = '1';
            oppTextTwo.style.opacity = '1';
            extopText.style.opacity = '1';
          }
    })
    return (
        <div className="bg-[#e6e7e8]">
            <header className="relative inset-x-0 top-0 z-50">
                <Header />
            </header>
            <div className="min-h-screen grid place-content-center banner-bg"></div>
            
            <div className="container mx-auto w-[100%] 3xl:w-[39%] 2xl:w-[38%] xl:w-[48%] lg:w-[78%] md:w-[78%]">
                <a href="/?scroll=true" className='fixed top-[8%] left-[5%] md:left-[10%] opacity-0 transition-[opacity] extopText'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    <span className='relative top-[-18px] left-[25px]'>Explore Other topics</span>
                </a>
                <div className='flex justify-between'>
                    <div className='content'>
                        <h2 className='text-md md:text-lg text-darkGreen fixed top-[25%] 2xl:top-[35%] xl:top-[30%] md:top-[40%] opacity-0 transition-[opacity] oppTextOne'>Connectivity</h2>
                    </div>
                    <div className='content'>
                        <p className='text-black text-xs md:text-nm text-center md:text-left ms-auto oppTextTwo fixed top-[68%] xl:top-[50%] md:top-[55%] right-[5.5%] 2xl:right-[19%] xl:right-[9%]  md:right-[2%] opacity-0 transition-[opacity] ease-in-out delay-100 2xl:w-[18%] w-[90%] xl:w-[23%] lg:w-[32%] md:w-[42%]'>
                                100% recycling and resume of water 85% occuupied spaces have views of the outdoors.
                            </p>
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6 scroll-area">
                    <a className="scroll-text fixed bottom-[10%] z-50 text-sm leading-6 text-white">
                        Keep Scrolling
                    </a>
                    <svg className='scroll-icon fixed bottom-[6%] z-50' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" /></svg>
                </div>
            </div>
            <div className='min-h-screen'></div>
            <div className='min-h-screen'></div>
            <div className='min-h-screen'></div>
        </div>
    );
};

export default Banner;