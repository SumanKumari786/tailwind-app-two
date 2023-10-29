import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Animate = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the 'scroll' parameter exists in the URL
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has('scroll')) {
      // Scroll to the bottom of the page
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [location.search]);
  // const [value1, setValue1] = useState(20);
  // const screenWidth = window.innerWidth;
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const heroimgbg = document.querySelector('.heroimgbg');
  //     const text1 = document.querySelector('.exp-text-one');
  //     const text2 = document.querySelector('.exp-text-two');
  //     const value = window.scrollY;
  //     var circleEnd;
  //     console.log(value); 
  //     if(screenWidth>=1920){
  //       circleEnd = 1880;
  //     }
  //     else if((screenWidth<1920) && (screenWidth>=1680)){
  //       circleEnd = 1900;
  //     }
  //      else if((screenWidth<1680) && (screenWidth>=767)){
  //       circleEnd = 1900;
  //     }
  //     else if((screenWidth<767) && (screenWidth>321)){
  //       circleEnd = 1995;
  //     }
  //     else{
  //       circleEnd = 2438;
  //     }
  //     if (value <= circleEnd) {
  //       const newValue1 = 2100 - value;
  //       text1.style.opacity = '0';
  //       text2.style.opacity = '0';
  //       setValue1(newValue1);
  //       heroimgbg.style.clipPath = `circle(${newValue1}px at center)`;
  //     }
  //     else {
  //       text1.style.opacity = '1';
  //       text2.style.opacity = '0.9';
  //     }
  //   };

  //   window.addEventListener('load', handleScroll);

  //   return () => {
  //     window.removeEventListener('load', handleScroll);
  //   };
  // }, [value1]);
  return (
    <section className="section bg-[#354033] mt-[-2px]">
      <div className="container mx-auto w-[90%] 3xl:w-[39%] 2xl:w-[46%] xl:w-[50%] md:w-[88%]">
        <div className="flex justify-between place-items-center column-area">
          <div className='content'>
            {/* <h2 className=' text-white exp-head fixed top-[25%] opacity-0 transition-[opacity] delay-100'>Ecoworld</h2> */}
            <p className=' text-white text-xs md:text-sm text-center md:text-left exp-text-one fixed top-[25%] 2xl:top-[35%] xl:top-[30%] md:top-[40%] opacity-0 transition-[opacity] ease-in-out delay-100 w-[90%] 2xl:w-[18%] xl:w-[23%] lg:w-[32%] md:w-[42%]'>
            Creating a world-class workplace experience, that continues to inspire you.
            </p>
          </div>
          <div className='content self-center'>
            <p className=' text-white text-xs md:text-sm text-center md:text-left ms-auto exp-text-two fixed top-[68%] xl:top-[50%] md:top-[55%] right-[2%] 2xl:right-[19%] xl:right-[9%]  md:right-[2%] opacity-0 transition-[opacity] ease-in-out delay-100 2xl:w-[18%] w-[90%] xl:w-[23%] lg:w-[32%] md:w-[42%]'>
                 100% recycling and resume of water 85% occuupied spaces have views of the outdoors.
            </p>
          </div>
        </div>
        <div className='min-h-screen'></div>
        {/* <div className='min-h-screen'></div>
        <div className='min-h-screen'></div> */}
        <div className='block md:hidden min-h-screen'></div>
        <div className='block md:hidden min-h-screen'></div>
      </div>
    </section>     
  )
}

export default Animate
