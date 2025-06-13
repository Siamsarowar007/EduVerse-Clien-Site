import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Why Choose EduVerse?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-200 text-center">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Expert Instructors</h3>
          <p className="text-gray-600">Learn from industry professionals with years of teaching and practical experience.</p>
        </div>

        <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-200 text-center">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Flexible Learning</h3>
          <p className="text-gray-600">Access courses anytime, anywhere with our flexible online platform.</p>
        </div>

        <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-200 text-center">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Career Support</h3>
          <p className="text-gray-600">Get career advice, internship opportunities, and resume support to land your dream job.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
