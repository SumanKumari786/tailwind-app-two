import React from 'react';
import Header from '../header';

const Banner = () => {
    window.addEventListener('scroll', function() {
        
        const bannerBg = document.querySelector('.banner-bg');
        const oppTextOne = document.querySelector('.oppTextOne');
        const oppTextTwo = document.querySelector('.oppTextTwo');
        const seamSec = document.querySelector('.seamSec');
        var wS = window.scrollY;
        var circle = 1500 - wS;
        var seamTop = seamSec.offsetHeight;
        var hT = bannerBg.offsetHeight;
        console.log(wS, hT, seamTop);
        if(wS<=1300){
            bannerBg.style.clipPath = `circle(${circle}px at center)`;
        }
        if(wS>=(hT+680)){
            oppTextOne.style.opacity = 1;
            oppTextTwo.style.opacity = 1;
        }
        else{
            oppTextOne.style.opacity = 0;
            oppTextTwo.style.opacity = 0;
        }
    })
    return (
        <div className="bg-[#e6e7e8]">
            <Header/>
            <div className="min-h-screen grid place-content-center banner-bg"></div>
            <div className='mx-auto w-[90%] 3xl:w-[39%] 2xl:w-[46%] xl:w-[59%] md:w-[88%]'>
                <div className='flex justify-between'>
                    <div className='content'>
                        <h2 className='text-5xl font-[500] text-darkGreen fixed top-[25%] xl:top-[30%] md:top-[40%] opacity-0 transition-[opacity] delay-100 oppTextOne'>Connectivity</h2>
                    </div>
                    <div className='content'>
                        <p className='text-black text-md md:text-xl text-center md:text-left ms-auto exp-text-two fixed top-[68%] xl:top-[50%] md:top-[55%] right-[2%] 2xl:right-[19%] xl:right-[9%]  md:right-[2%] opacity-0 transition-[opacity] ease-in-out delay-100 2xl:w-[17%] w-[90%] xl:w-[23%] lg:w-[32%] md:w-[42%] oppTextTwo'>
                        100% recycling and resume of water 85% occuupied spaces have views of the outdoors.
                        </p>
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6 scroll-area">
                    <a href="#" className="scroll-text fixed bottom-[10%] z-50 font-[600] text-md md:text-lg leading-6 text-[#436d3d]">
                    Keep Scrolling 
                    </a>
                    <svg className='scroll-icon fixed bottom-[6%] z-50' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg>
                </div>
            </div>
            <div className='min-h-screen'></div>
            <div className='min-h-screen'></div>
            <div className='min-h-screen'></div>
        </div>
    );
};

export default Banner;