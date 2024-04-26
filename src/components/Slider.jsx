// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper } from 'swiper/react';}
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="z-50">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg h-[350px] md:h-[550px]"
      >
        <SwiperSlide>
          <img 
            src="https://i.ibb.co/47PxtMG/img-0173-2.webp "
            alt=""
            className="w-full object-fill object-center h-full"
          />

          

        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/WWd13gy/tourist-places-in-usa2.png"
            alt=""
            className="w-full object-fill object-center h-full"
          />
          
       
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/KKSG0Zt/shutterstock-1418523158.webp"
            alt=""
            className="w-full object-fill object-center h-full"
          />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slider;
