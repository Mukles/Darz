import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{ Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([ Pagination, Autoplay]);
const ProductSlider = () =>{
  const items = [
    { url: './images/TB1npjoSBr0gK0jSZFnXXbRRXXa.jpg' },
    { url: './images/TB13rxoeSslXu8jSZFuXXXg7FXa.jpg' },
    { url: './images/TB1TH7aSlr0gK0jSZFnXXbRRXXa.png' },
    { url: './images/aSlr0gK0jSZFnXXbRRXXa.jpg' },
    { url: './images/TB1Nu7aSlr0gK0jSZFnXXbRRXXa.jpg' },
    { url: './images/TB1fi0nSBr0gK0jSZFnXXbRRXXa.jpg' },
    { url: './images/TB1bKtoeSslXu8jSZFuXXXg7FXa.jpg' } ,
    { url: './images/TB1XQ3_Slr0gK0jSZFnXXbRRXXa.jpg' }
  ]

  // useEffect(() =>{

  //   if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
  //   const { gallerySwiper, thumbnailSwiper } = nextState
  //
  //   gallerySwiper.controller.control = thumbnailSwiper;
  //   thumbnailSwiper.controller.control = gallerySwiper;
  //
  //   var swiperSlide = document.getElementsByClassName('swiper-zoom-container')
  //   for(var index = 0; index<swiperSlide.length; index++){
  //     swiperSlide[index].addEventListener('mouseover',function(e){
  //       gallerySwiper.zoom.in();
  //     })
  //     swiperSlide[index].addEventListener('mouseout',function(e){
  //       gallerySwiper.zoom.out();
  //     })
  //   }
  // }

  //   const id = [...document.querySelectorAll('.swiper-pagination-bullet')];
  //   const swiper = [...document.querySelectorAll('.swiper-slide')];
  //
  //   id.forEach((item, i) => {
  //     item.addEventListener('mouseover',function(event,item){
  //       const index = id.indexOf(this);
  //       const newArray = id.filter((item, i) => item != id[index]);
  //       newArray.filter(item => item.className ='swiper-pagination-bullet');
  //       swiper.filter(item => item.className ='swiper-slide')
  //       if(this.className!='swiper-pagination-bullet swiper-pagination-bullet-active')
  //         this.className +=' swiper-pagination-bullet-active';
  //         swiper[index].className += ' swiper-slide-active'
  //     })
  //   });
  //
  // },[])

  return (
    <section id='slider'>
      <Swiper
        pagination={{ clickable: true }}
        autoplay

      >
        {items.map(item =>(
          <SwiperSlide key={item.url}>
            <img src={item.url} alt='image' className='img img-fluid w-100' />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ProductSlider;
