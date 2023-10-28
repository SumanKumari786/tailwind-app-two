import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Connectivity = () => {
  const [connImgVisible, setConnImgVisible] = useState(false);
  {
    const settings = {
      // centerMode: true,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: false,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
       
        {
          breakpoint: 600,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    };

    window.addEventListener('scroll', function() {
      var wS = window.scrollY;
      const slideTop = document.querySelector('.slideSection');
      const scrollText = document.querySelector('.scroll-text');
      const scrollIcon = document.querySelector('.scroll-icon');
      var secTop = slideTop.offsetTop;
      if(wS >= secTop){
        scrollText.classList.remove('fixed');
        scrollIcon.classList.remove('fixed');
      }
      else{
        scrollText.classList.add('fixed');
        scrollIcon.classList.add('fixed');
      }
    });

    function handleClick() {
      setConnImgVisible(true);
      var expbg = document.querySelector('.expbg');
      var connImg = document.querySelector('#connImg');
      if (connImg.style.opacity === "0" || connImg.style.opacity === "") {
        expbg.style.opacity = 0;
        connImg.style.opacity = 1;
      }
    }

    return (
      <div className="slideSection text-center text-white z-50 min-h-screen relative mt-[-100vh]">
        {/* <div className="bg"></div> */}
        <div className="absolute top-[50%] translate-y-[-40%] h-fit" style={{width: "100%"}} onClick={handleClick}>
        <Slider className="connSlider lg:pt-6" {...settings}>
          <div className="item" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="280">
            <img className='' src="/images/campus.png" alt="" />
            <h4 className="mt-4 text-sm leading-10">The Campus</h4>
            <p className="px-2 2xl:px-6">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="item" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="280">
            <img className='hidden-img' src="/images/tech.png" alt="" />
            <h4 className="mt-4 text-sm leading-10">Tech Forward</h4>
            <p className="px-2 2xl:px-6">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="280">
            <a href="/connectivity">
              <img id='connImg' className='connImg opacity-[0]' src="/images/connectivity.png" alt="" />
              <h4 className="mt-4 text-sm leading-10">Connectivity</h4>
              <p className="px-2 2xl:px-6">Lorem Ipsum is simply dummy text of the printing</p>
            </a>
          </div>
          <div className="item" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="280">
            <img className='' src="/images/inspiration.png" alt="" />
            <h4 className="mt-4 text-sm leading-10">Inspiration</h4>
            <p className="px-2 2xl:px-6">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="item" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="280">
            <img className='' src="/images/wellness.png" alt="" />
            <h4 className="mt-4 text-sm leading-10">Wellness</h4>
            <p className="px-2 2xl:px-6">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="item" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="280">
            <img className='' src="/images/hero.jpg" alt="" />
            <h4 className="mt-4 text-sm leading-10">The Campus</h4>
            <p className="px-2 2xl:px-6">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </Slider>
        </div>
      </div>
    );
}
}
export default Connectivity
