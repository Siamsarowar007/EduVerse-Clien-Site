import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
// Banner Data with Correct Image URLs
const bannerData = [
  {
    title: "Master New Skills",
    subtitle: "Join thousands of learners and explore a variety of courses.",
    image: "https://i.ibb.co/9kWcRdx/course-registration-banner-1-1-0.png"
  },
  {
    title: "Enroll & Achieve",
    subtitle: "Start your journey towards success with expert instructors.",
    image: "https://i.ibb.co/hRf4Z1K/Course-Registration-1.jpg"
  },
  {
    title: "Grow Your Career",
    subtitle: "Advance your professional skills with our certified programs.",
    image: "https://i.ibb.co/84gg8Nm/course-registration-banner.jpg"
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
    <section className="relative">
      <Slider {...settings}>
        {bannerData.map((slide, index) => (
          <div key={index} className="relative h-[90vh] w-full">
            {/* Background Image using img tag for better loading */}
            <img
              src={slide.image}
              alt="Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.button
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition duration-300"
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
