import React, { Component } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Connectivity() {
  {
    const settings = {
      // centerMode: true,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
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
    return (
      <div className="slideSection text-center text-white z-50 min-h-screen relative">
        <div className="bg"></div>
        <div className="absolute top-[50%] translate-y-[-50%] h-fit" style={{width: "100%"}}>
        <Slider className="connSlider" {...settings}>
          <div className="item">
            <img className='' src="/images/experiance-bg.jpg" />
            <h4 className="mt-4 text-2xl leading-10">The Campus</h4>
            <p className="px-2">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="item">
            <img className='' src="/images/hero.jpg" />
            <h4 className="mt-4 text-2xl leading-10">Connectivity</h4>
            <p className="px-2">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="item">
            <img className='' src="/images/experiance-bg.jpg" />
            <h4 className="mt-4 text-2xl leading-10">Tech Forward</h4>
            <p className="px-2">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="item">
            <img className='' src="/images/hero.jpg" />
            <h4 className="mt-4 text-2xl leading-10">Inspiration</h4>
            <p className="px-2">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="item">
            <img className='' src="/images/experiance-bg.jpg" />
            <h4 className="mt-4 text-2xl leading-10">Connectivity</h4>
            <p className="px-2">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className="item">
            <img className='' src="/images/hero.jpg" />
            <h4 className="mt-4 text-2xl leading-10">The Campus</h4>
            <p className="px-2">Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </Slider>
        </div>
      </div>
    );
}
}
export default Connectivity
