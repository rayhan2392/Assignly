// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../assets/images/banner2.jpeg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded-lg w-[400px] h-[200px]" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-lg w-[400px] h-[200px]"
            src="https://i.ibb.co/R9Y6k7v/online-survey-3d-render-laptop-form-with-ticks.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            className="rounded-lg w-[400px] h-[200px]"
            src=" https://i.ibb.co/BgrYPyN/Team-of-analysts-working-on-brand-reputation-in-social-media.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
