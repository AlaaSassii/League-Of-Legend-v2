import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip'
const Skins = ({skins, name}) => {
  console.log(skins)
  return (
    <div className="skinss">
      <h1 style={{alignText:"center",margin:"10px auto",width:"100%"}}>Skins</h1>
    <Swiper className='slider'
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={5}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {/* <SwiperSlide>Slide 2</SwiperSlide> */}
  {skins.map((skin,index) => <SwiperSlide key={index}>
    <h3>{skin.name}</h3>
    <img  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg  `} />
  </SwiperSlide>)}
  </Swiper>
  </div>
  )
}

export default Skins