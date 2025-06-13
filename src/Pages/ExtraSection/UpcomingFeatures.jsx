import React from 'react';

const UpcomingFeatures = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">🚀 Upcoming Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 text-center">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Live Class Integration</h3>
          <p className="text-gray-600">Attend real-time classes and interact with instructors for better learning experience.</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 text-center">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Certification Program</h3>
          <p className="text-gray-600">Get verified certificates upon completion to showcase your skills to employers.</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 text-center">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">AI Powered Suggestions</h3>
          <p className="text-gray-600">Our AI engine will suggest best courses based on your learning behavior.</p>
        </div>
      </div>
    </div>
  );
}

export default UpcomingFeatures;
