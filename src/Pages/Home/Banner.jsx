import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Banner Data
const bannerData = [
  {
    title: "Master New Skills",
    subtitle: "Join thousands of learners and explore a variety of courses.",
    image: "https://i.ibb.co/84gg8NmQ/course-registration-banner.jpg"
  },
  {
    title: "Enroll & Achieve",
    subtitle: "Start your journey towards success with expert instructors.",
    image: "https://i.ibb.co/hRf4Z1kB/Course-Registration-1.jpg"
  },
  {
    title: "Grow Your Career",
    subtitle: "Advance your professional skills with our certified programs.",
    image: "https://i.ibb.co/9kWcRdx0/course-registration-banner-1-1-0.png"
  }
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="relative shadow-lg overflow-hidden">
      <Slider {...settings}>
        {bannerData.map((slide, index) => (
          <div key={index} className="relative h-[60vh] md:h-[65vh] lg:h-[70vh] w-full">
            <img
              src={slide.image}
              alt="Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-50" />

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
              <motion.h1
                className="text-3xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-base md:text-2xl text-white/80 mb-8 max-w-2xl drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.button
                className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Explore Courses
              </motion.button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;
