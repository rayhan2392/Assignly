// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import images
import slide1 from "../assets/images/banner2.jpeg";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#4CAF50] to-[#3F51B5]">
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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[400px] flex justify-center items-center">
            <img
              className="rounded-lg mx-auto w-full h-full object-cover opacity-80"
              src={slide1}
              alt="Banner Image 1"
            />
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute text-center text-white z-10">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                Manage Assignments Seamlessly
              </h1>
              <p className="text-xl mb-4">
                A peer evaluation system to streamline your assignments and feedback.
              </p>
              <button className="bg-[#FFC107] text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#FFB300] transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[400px] flex justify-center items-center">
            <img
              className="rounded-lg mx-auto w-full h-full object-cover opacity-80"
              src="https://i.ibb.co/R9Y6k7v/online-survey-3d-render-laptop-form-with-ticks.jpg"
              alt="Banner Image 2"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute text-center text-white z-10">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                Streamlined Peer Evaluation
              </h1>
              <p className="text-xl mb-4">
                Efficiently manage assignments, peer reviews, and feedback.
              </p>
              <button className="bg-[#FFC107] text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#FFB300] transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-[400px] flex justify-center items-center">
            <img
              className="rounded-lg mx-auto w-full h-full object-cover opacity-80"
              src="https://i.ibb.co/BgrYPyN/Team-of-analysts-working-on-brand-reputation-in-social-media.jpg"
              alt="Banner Image 3"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute text-center text-white z-10">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                Simplify Your Workflow
              </h1>
              <p className="text-xl mb-4">
                Get your assignments managed with ease and precision.
              </p>
              <button className="bg-[#FFC107] text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#FFB300] transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
