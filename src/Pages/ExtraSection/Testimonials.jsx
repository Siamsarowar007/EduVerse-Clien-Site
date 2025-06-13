import React from 'react';

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">What Our Students Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200">
          <p className="text-gray-700 italic mb-4">
            “EduVerse has completely transformed my career. The instructors are knowledgeable, and the platform is easy to use.”
          </p>
          <h4 className="text-blue-700 font-semibold">- Sarah K.</h4>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200">
          <p className="text-gray-700 italic mb-4">
            “Thanks to EduVerse, I landed my first job as a frontend developer. The real-world projects helped a lot.”
          </p>
          <h4 className="text-blue-700 font-semibold">- Ahmed R.</h4>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200">
          <p className="text-gray-700 italic mb-4">
            “Excellent courses with very supportive community and mentors. Highly recommended for anyone serious about learning.”
          </p>
          <h4 className="text-blue-700 font-semibold">- Emily W.</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
