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
    <div className="relative box-border overflow-hidden">
      <div className="z-40 opacity-90">
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
              src="https://www.touropia.com/gfx/b/2011/06/porto_de_galinhas.jpg"
              alt=""
              className="w-full object-fill object-center h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media2.thrillophilia.com/images/photos/000/371/220/original/1617971680_Town-of-Whistler.jpg?w=753&h=450&dpr=1.0"
              alt=""
              className="w-full object-fill object-center h-full"
            />
          </SwiperSlide>
        </Swiper>
        <div className="lg:flex flex-col items-center gap-y-3  absolute top-7 z-10 opacity-100">
          <div className="text-2xl  font-bold md:text-5xl my-7 text-green-600">Tour Your Dream Destination with Us.</div>

          <p className=" my-2 font-medium  h-32  text-orange-100 text-2xl truncate lg:h-auto w-1/2 text-wrap ">
            Welcome to the land of opportunity, diversity, and natural wonders.
            America is a vast and diverse country, offering something for every
            traveler. From the bustling streets of New York City to the majestic
            landscapes of the Grand Canyon, let's embark on a virtual journey
            across this incredible nation.
          </p>
          <button className="btn btn-active btn-secondary ">Explore More</button>

        </div>
      </div>
    </div>
  );
};

export default Slider;
