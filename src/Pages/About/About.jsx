import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaChalkboardTeacher, FaUserGraduate, FaCertificate, FaDollarSign, FaUsers, FaGlobe, FaLightbulb, FaHandshake } from 'react-icons/fa';
import { NavLink } from 'react-router';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20 font-sans">
            {/* Meta Title */}
            <title>About EduVerse | Premium Online Learning Marketplace</title>

            {/* Hero Section with Gradient Background */}
            <motion.div
                className="mb-20 bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600  p-12 rounded-3xl shadow-2xl text-center text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-5xl font-bold mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Redefining <span className="text-yellow-300">Online Education</span>
                </motion.h1>
                <motion.p
                    className="text-xl max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    EduVerse bridges the gap between knowledge seekers and industry experts through our premium course marketplace.
                </motion.p>
            </motion.div>

            {/* Value Proposition Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="text-blue-500 text-4xl mb-4">
                        <FaChalkboardTeacher />
                    </div>
                    <h3 className="text-xl text-blue-600 font-semibold mb-3">Expert Instructors</h3>
                    <p className="text-gray-600">Learn from industry professionals with real-world experience</p>
                </motion.div>

                <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500 transform hover:-translate-y-2 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="text-purple-500 text-4xl mb-4">
                        <FaUserGraduate />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Career Outcomes</h3>
                    <p className="text-gray-600">Courses designed to boost your career prospects</p>
                </motion.div>

                <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 transform hover:-translate-y-2 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="text-green-500 text-4xl mb-4">
                        <FaCertificate />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Verified Certificates</h3>
                    <p className="text-gray-600">Industry-recognized credentials for your portfolio</p>
                </motion.div>

                <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500 transform hover:-translate-y-2 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="text-yellow-500 text-4xl mb-4">
                        <FaDollarSign />
                    </div>
                    <h3 className="text-xl font-semibold  mb-3">Earning Potential</h3>
                    <p className="text-gray-600">Top instructors earn $10,000+ monthly</p>
                </motion.div>
            </div>

            {/* Platform Stats with Animated Counters */}
            <div className="py-16 mb-20 bg-gray-50 rounded-3xl shadow-lg">
                <h2 className="text-3xl font-bold text-blue-600 text-center mb-16">EduVerse in Numbers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
                    <div className="text-center">
                        <CountUp
                            end={1250}
                            duration={3}
                            className="text-5xl font-bold text-blue-600 block mb-2"
                        />
                        <p className="text-gray-600 uppercase text-sm tracking-wider">Courses Available</p>
                    </div>
                    <div className="text-center">
                        <CountUp
                            end={850}
                            duration={3}
                            className="text-5xl font-bold text-purple-600 block mb-2"
                        />
                        <p className="text-gray-600 uppercase text-sm tracking-wider">Expert Instructors</p>
                    </div>
                    <div className="text-center">
                        <CountUp
                            end={75000}
                            duration={3}
                            suffix="+"
                            className="text-5xl font-bold text-green-600 block mb-2"
                        />
                        <p className="text-gray-600 uppercase text-sm tracking-wider">Students Enrolled</p>
                    </div>
                    <div className="text-center">
                        <CountUp
                            end={97}
                            duration={3}
                            suffix="%"
                            className="text-5xl font-bold text-yellow-600 block mb-2"
                        />
                        <p className="text-gray-600 uppercase text-sm tracking-wider">Satisfaction Rate</p>
                    </div>
                </div>
            </div>

            {/* Instructor Success Stories */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-2xl mr-4">
                                <FaUsers />
                            </div>
                            <div>
                                <h4 className="font-semibold">Sarah Johnson</h4>
                                <p className="text-gray-500 text-sm">Web Development Instructor</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"EduVerse helped me turn my passion into a full-time career, reaching students in 45 countries."</p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 text-2xl mr-4">
                                <FaGlobe />
                            </div>
                            <div>
                                <h4 className="font-semibold">Michael Chen</h4>
                                <p className="text-gray-500 text-sm">Data Science Instructor</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"In my first year, I earned $85,000 while helping others break into tech."</p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-2xl mr-4">
                                <FaLightbulb />
                            </div>
                            <div>
                                <h4 className="font-semibold">Priya Patel</h4>
                                <p className="text-gray-500 text-sm">UX Design Instructor</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"The platform's tools made course creation effortless, letting me focus on teaching."</p>
                    </motion.div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 rounded-3xl p-12 text-center text-white shadow-lg">
                <h2 className="text-4xl font-bold mb-6">Join the EduVerse Community</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Whether you want to learn new skills or share your expertise, we provide the perfect platform.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <NavLink
                            to="/allCourses"
                            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                        >
                            <FaUserGraduate className="mr-2" /> Explore Courses
                        </NavLink>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <NavLink
                            to="/service"
                            className="px-8 py-4 border-2 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                        >
                            <FaChalkboardTeacher className="mr-2" /> Become an Instructor
                        </NavLink>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;