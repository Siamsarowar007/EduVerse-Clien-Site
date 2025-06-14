import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">

            {/* Hero Section */}
            <motion.div
                className="mb-20 bg-gradient-to-r from-blue-100 via-white to-purple-100 p-12 rounded-3xl shadow-xl flex flex-col items-center text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-extrabold text-blue-700 mb-6">Welcome to EduVerse</h1>
                <p className="text-lg text-gray-700 max-w-3xl">
                    Empowering your learning journey with expert-led courses, innovative tools, and a global learning community.
                    Learn anytime, anywhere with EduVerse — your trusted digital education partner.
                </p>
            </motion.div>

            {/* Vision - Mission - Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                <motion.div className="bg-blue-100 p-8 rounded-2xl shadow-lg text-center" whileHover={{ scale: 1.05 }}>
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h2>
                    <p className="text-gray-700">
                        To democratize knowledge and make learning accessible for all globally.
                    </p>
                </motion.div>

                <motion.div className="bg-purple-100 p-8 rounded-2xl shadow-lg text-center" whileHover={{ scale: 1.05 }}>
                    <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h2>
                    <p className="text-gray-700">
                        Deliver industry-standard education using expert guidance and smart technology.
                    </p>
                </motion.div>

                <motion.div className="bg-green-100 p-8 rounded-2xl shadow-lg text-center" whileHover={{ scale: 1.05 }}>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Our Values</h2>
                    <p className="text-gray-700">
                        Integrity, Innovation, Inclusivity and Continuous Learning.
                    </p>
                </motion.div>
            </div>

            {/* Deeper Description */}
            <div className="text-center mb-20">
                <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Who We Are?</h2>
                <p className="max-w-5xl mx-auto text-lg text-gray-700">
                    EduVerse isn't just another e-learning platform. We aim to create an ecosystem where passionate learners meet skilled instructors.
                    Our platform continuously evolves, adapting cutting-edge technology like AI-assisted learning, personalized course tracks, peer discussions, and collaborative project-based modules to ensure real-world skill development.
                </p>
            </div>

            {/* Our Achievements with CountUp */}
            <div className="mb-20">
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">Our Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
                    <motion.div className="p-8 rounded-2xl shadow-xl bg-blue-50" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-blue-600 mb-2">
                            <CountUp end={50} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Expert Instructors</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-purple-50" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-purple-600 mb-2">
                            <CountUp end={40} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Active Courses</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-green-50" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-green-600 mb-2">
                            <CountUp end={5000} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Happy Learners</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-pink-50" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-pink-600 mb-2">
                            <CountUp end={100} duration={3} />%
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Student Satisfaction</p>
                    </motion.div>

                    {/* Additional Stats */}
                    <motion.div className="p-8 rounded-2xl shadow-xl bg-yellow-50 col-span-1 md:col-span-2" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-yellow-600 mb-2">
                            <CountUp end={20} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Corporate Partners</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-indigo-50 col-span-1 md:col-span-2" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-indigo-600 mb-2">
                            <CountUp end={15} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Countries Reached</p>
                    </motion.div>

                    <motion.div className="p-8 rounded-2xl shadow-xl bg-teal-50 col-span-4" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-teal-600 mb-2">
                            <CountUp end={150} duration={3} />+
                        </h3>
                        <p className="text-lg text-gray-700 font-semibold">Projects Completed</p>
                    </motion.div>

                </div>
            </div>

            {/* Platform Growth Section */}
            <div className="bg-gradient-to-r from-blue-100 via-white to-purple-100 p-12 rounded-3xl shadow-xl text-center">
                <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Our Future Goal</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    We aim to transform EduVerse into a global educational ecosystem fostering collaboration between students, instructors, companies, and industries.
                    With upcoming AI-powered mentoring, job placement assistance, and skill certification partnerships, we're building the future of learning.
                </p>
            </div>

        </div>
    );
};

export default About;
