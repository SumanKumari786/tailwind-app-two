import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Animate() {
  const [value1, setValue1] = useState(20);
  useEffect(() => {
    const handleScroll = () => {
      const heroimgbg = document.querySelector('.heroimgbg');
      const text1 = document.querySelector('.exp-text-one');
      const text2 = document.querySelector('.exp-text-two');
      const expSec = document.querySelector('.expSec');
      const value = window.scrollY;
      // console.log(value); 
      if (value <= 2300) {
        const newValue1 = 2500 - value;
        text1.style.opacity = '0';
        text2.style.opacity = '0';
        setValue1(newValue1);
        heroimgbg.style.clipPath = `circle(${newValue1}px at center)`;
      }
      else {
        setValue1(10);
        text1.style.opacity = '1';
        text2.style.opacity = '0.9';
        // heroimgbg.style.clipPath = `circle(${value1}% at center)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [value1]);
  return (
    <section className="section bg-[#354033] mt-[-2px]">
      <div className="container mx-auto w-[90%] 3xl:w-[39%] 2xl:w-[46%] xl:w-[50%] md:w-[88%]">
        <div className="flex justify-between place-items-center column-area">
          <div className='content'>
            {/* <h2 className=' text-white exp-head fixed top-[25%] opacity-0 transition-[opacity] delay-100'>Ecoworld</h2> */}
            <p className=' text-white text-md md:text-xl text-center md:text-left exp-text-one top-[25%] fixed xl:top-[30%] md:top-[40%] opacity-0 transition-[opacity] ease-in-out delay-100 w-[90%] 2xl:w-[17%] xl:w-[23%] lg:w-[32%] md:w-[42%]'>
            Creating a world-class workplace experience, that continues to inspire you.
            </p>
          </div>
          <div className='content self-center'>
            <p className=' text-white text-md md:text-xl text-center md:text-left ms-auto exp-text-two fixed top-[68%] xl:top-[50%] md:top-[55%] right-[2%] 2xl:right-[19%] xl:right-[9%]  md:right-[2%] opacity-0 transition-[opacity] ease-in-out delay-100 2xl:w-[17%] w-[90%] xl:w-[23%] lg:w-[32%] md:w-[42%]'>
                 100% recycling and resume of water 85% occuupied spaces have views of the outdoors.
            </p>
          </div>
        </div>
        <div className='min-h-screen'></div>
        <div className='min-h-screen'></div>
        <div className='min-h-screen'></div>
      </div>
    </section>     
  )
}

export default Animate
