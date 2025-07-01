import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Link } from 'react-router';

const Services = () => {
    // Upcoming Features Data
    const upcomingFeatures = [
        {
            title: "Live Q&A Sessions",
            description: "Direct interaction with instructors to clear your doubts in real-time."
        },
        {
            title: "Mobile App",
            description: "Learn on-the-go with our upcoming mobile app for iOS and Android."
        },
        {
            title: "Personalized Learning Paths",
            description: "Get customized course recommendations based on your goals."
        },
        {
            title: "Community Forum",
            description: "Join a community of learners to share knowledge and network."
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <title>Service || EduVerse</title>
            {/* Pg title */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-indigo-900 mb-4">Why Choose EduVerse?</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Unlock your potential with our expertly curated courses, flexible learning, and 24/7 support.
                </p>
            </div>

            {/* Key Benefits */}
            <div className="grid gap-10 md:grid-cols-3">
                {[
                    {
                        icon: '📚',
                        title: "Quality Content",
                        desc: "Our courses are created by industry experts with updated, practical knowledge."
                    },
                    {
                        icon: '💻',
                        title: "Flexible Learning",
                        desc: "Learn at your own pace with lifetime access to course materials and videos."
                    },
                    {
                        icon: '🎓',
                        title: "Certification",
                        desc: "Earn recognized certificates after course completion to boost your career."
                    },
                    {
                        icon: '🤝',
                        title: "Personal Mentorship",
                        desc: "Get direct guidance from instructors through Q&A sessions and forums."
                    },
                    {
                        icon: '💬',
                        title: "Community Support",
                        desc: "Join an active community of learners and share knowledge & experiences."
                    },
                    {
                        icon: '🔒',
                        title: "Secure Payment",
                        desc: "Safe and multiple payment options with instant order confirmation."
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="p-8 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-50 to-purple-50"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold text-indigo-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Upcoming Features */}
            <div className="my-20">
                <h2 className="text-4xl font-extrabold text-indigo-900 mb-16 text-center">Upcoming Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {upcomingFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-indigo-50 rounded-xl border border-indigo-300 shadow-md"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2 flex items-center justify-between">
                                {feature.title}
                                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                                    Coming Soon
                                </span>
                            </h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div className="my-20 bg-indigo-100 px-6 py-16 rounded-3xl shadow-xl">
                <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-10">Our Impact & Growth</h2>
                <p className="text-center max-w-3xl mx-auto text-gray-700 mb-12">
                    At EduVerse, we are proud of the milestones we have achieved. Our focus remains on delivering quality education and empowering learners worldwide.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                    <motion.div className="p-8 bg-white rounded-2xl shadow-lg" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-indigo-700 mb-2"><CountUp end={3500} duration={3} />+</h3>
                        <p className="text-lg font-semibold text-gray-800">Students Empowered</p>
                    </motion.div>
                    <motion.div className="p-8 bg-white rounded-2xl shadow-lg" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-indigo-700 mb-2"><CountUp end={140} duration={3} />+</h3>
                        <p className="text-lg font-semibold text-gray-800">Expert-led Courses</p>
                    </motion.div>
                    <motion.div className="p-8 bg-white rounded-2xl shadow-lg" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-indigo-700 mb-2">98%</h3>
                        <p className="text-lg font-semibold text-gray-800">Learner Satisfaction Rate</p>
                    </motion.div>
                    <motion.div className="p-8 bg-white rounded-2xl shadow-lg" whileHover={{ scale: 1.05 }}>
                        <h3 className="text-5xl font-extrabold text-indigo-700 mb-2"><CountUp end={120} duration={3} />+</h3>
                        <p className="text-lg font-semibold text-gray-800">Career Transformed</p>
                    </motion.div>
                </div>
                <p className="mt-12 max-w-2xl mx-auto text-center text-gray-600 italic">
                    "Our commitment is not just to teach, but to create lasting impact through every course we offer."
                </p>
            </motion.div>

            {/* Testimonials */}
            <div className="my-20">
                <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-12">What Our Students Say</h2>
                <div className="max-w-5xl mx-auto space-y-10">
                    {[
                        {
                            name: "Anik Hasan",
                            feedback: "EduVerse changed my career path! The courses are comprehensive and the instructors are very supportive.",
                            photo: "https://randomuser.me/api/portraits/men/32.jpg"
                        },
                        {
                            name: "Ritu Das",
                            feedback: "The flexible learning schedule allowed me to balance work and study. Highly recommend EduVerse!",
                            photo: "https://randomuser.me/api/portraits/women/44.jpg"
                        },
                        {
                            name: "Shuvro Alam",
                            feedback: "Certification boosted my resume. The community support is fantastic. Truly a game changer.",
                            photo: "https://randomuser.me/api/portraits/men/56.jpg"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-8 rounded-3xl shadow-lg flex items-center gap-6"
                            whileHover={{ scale: 1.03 }}
                        >
                            <img
                                className="w-20 h-20 rounded-full border-4 border-indigo-500"
                                src={item.photo}
                                alt={item.name}
                            />
                            <div>
                                <h4 className="text-xl font-bold text-indigo-900">{item.name}</h4>
                                <p className="mt-2 text-gray-700 italic">"{item.feedback}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call To Action */}

            <motion.div
                className="text-center mt-20 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">Ready to Start Learning?</h2>
                <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
                    Join thousands of students who are transforming their careers with EduVerse courses.
                </p>
                <Link to="/">
                    <motion.button
                        className="bg-indigo-700 text-white font-bold md:px-8 px-6 py-3 md:py-4 rounded-full shadow-lg hover:bg-indigo-800 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Browse Courses
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Services;
