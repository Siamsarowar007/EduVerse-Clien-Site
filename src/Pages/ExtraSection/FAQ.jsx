import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            className="border border-white/20 rounded-xl p-5 bg-white bg-opacity-10 backdrop-blur-md shadow-md transition-all duration-300"
            whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
        >
            <button
                className="flex justify-between items-center w-full text-left text-lg font-semibold 
  👉 text-blue-500 👈 
  hover:text-blue-600 transition-colors"
                onClick={onClick}
            >
                <span>{question}</span>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
            </button>


            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <p className="mt-3 text-base text-blue-500 leading-relaxed drop-shadow
      border border-blue-300 rounded-lg p-4 bg-white bg-opacity-20 shadow-lg backdrop-blur-sm">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "How do I enroll in a course?",
            answer: "Simply click on the 'Enroll Now' button on the course page and complete the registration process.",
        },
        {
            question: "Can I cancel my enrollment?",
            answer: "Yes, you can cancel anytime before the course starts. Please check our cancellation policy for more details.",
        },
        {
            question: "Are there any prerequisites?",
            answer: "Most beginner courses require no prior knowledge. However, some advanced courses may have specific prerequisites.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept credit/debit cards, PayPal, and bank transfers for your convenience.",
        },
        {
            question: "Will I receive a certificate?",
            answer: "Yes, upon successful completion of the course, you will receive a digital certificate.",
        },
    ];

    return (
        <section className="relative max-w-7xl mx-auto bg-gradient-to-br from-[#e6f0ff] via-white to-[#cce0ff] py-20 px-6 sm:px-10 my-12 lg:px-16 rounded-3xl shadow-xl overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                {/* Left Section */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-sm font-semibold tracking-widest text-blue-700 mb-6 uppercase">FAQs</h2>
                    <h3 className="text-4xl sm:text-5xl font-bold text-blue-700 leading-tight mb-4 drop-shadow-lg">
                        Course Enrollment <br /> Frequently Asked Questions
                    </h3>
                    <p className="text-white/80 mb-4 max-w-md text-base leading-relaxed">
                        Find quick answers to your questions about enrolling in our courses, payment options, and more.
                    </p>
                    {/* <button className="bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 w-fit font-semibold">
                        Service
                    </button> */}
                    <Link to='/service' className="bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 w-fit font-semibold">
                        Service
                    </Link>
                </div>

                {/* Right Section - FAQs */}
                <div className="space-y-6">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-300 rounded-full blur-2xl opacity-30"></div>
                <div className="absolute top-1/2 left-1/3 w-96 h-96 border border-orange-400 rounded-full opacity-10 animate-pulse"></div>
            </div>
        </section>
    );
};

export default FAQ;
