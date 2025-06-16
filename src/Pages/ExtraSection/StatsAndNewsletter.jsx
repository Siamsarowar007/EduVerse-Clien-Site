import React, { useState, useRef, useEffect } from "react";
import { FaUserGraduate, FaFolderOpen, FaChalkboardTeacher, FaBuilding, FaBriefcase } from "react-icons/fa";
import Swal from "sweetalert2";
import CountUp from 'react-countup';

// Reusable StatBox component
const StatBox = ({ icon, count, title, startCount }) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 border border-white/20 text-black">
      {icon}
      <h3 className="text-4xl font-bold mt-3">
        {startCount ? <CountUp end={count} duration={2} /> : 0}
      </h3>
      <p className="mt-2 text-lg font-semibold">{title}</p>
    </div>
  );
};


const StatsAndNewsletter = () => {
  const [email, setEmail] = useState("");
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire("Please enter an email!");
      return;
    }
    Swal.fire("Subscribed!", `Thank you for subscribing with ${email}`, "success");
    setEmail("");
  };

  return (
    <div className="w-full">
     
      <div
        ref={statsRef}
        className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white py-20"
      >
        <h2 className="text-4xl font-semibold text-center mb-16 tracking-wide drop-shadow-lg">EduVerse Course Programmes</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6">
          <StatBox icon={<FaUserGraduate className="text-5xl mb-4 text-yellow-400" />} count={1558} title="Students" startCount={startCount} />
          <StatBox icon={<FaFolderOpen className="text-5xl mb-4 text-yellow-400" />} count={40} title="Learning Programmes" startCount={startCount} />
          {/* <StatBox icon={<FaBriefcase className="text-5xl mb-4 text-yellow-400" />} count={12} title="Language Trainings" startCount={startCount} /> */}
          <StatBox icon={<FaBuilding className="text-5xl mb-4 text-yellow-400" />} count={13} title="Branches" startCount={startCount} />
          <StatBox icon={<FaChalkboardTeacher className="text-5xl mb-4 text-yellow-400" />} count={50} title="Instructors" startCount={startCount} />
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 py-16 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-8 text-white drop-shadow-md">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-4 px-6 rounded-full w-80 md:w-96 shadow-md text-gray-700 outline-none"
          />
          <button type="submit" className="bg-black text-white px-10 py-4 rounded-full shadow-md hover:scale-105 transition transform duration-300 font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default StatsAndNewsletter;
