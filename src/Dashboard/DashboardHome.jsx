import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4 md:px-10">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 border border-purple-200">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Welcome to Your Dashboard</h1>

                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={user?.photoURL}
                        alt="User"
                        className="w-32 h-32 rounded-full border-4 border-purple-400 shadow-md"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
                        <p className="text-gray-600 mt-1">{user?.email}</p>
                        <p className="text-sm mt-2 text-purple-700">Thank you for being a part of EduVerse!</p>
                    </div>
                </div>

                {/* Example section: Stats or Links */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
                        <h3 className="text-lg font-semibold text-blue-800">Enrolled Courses</h3>
                        <p className="text-2xl font-bold text-blue-600">05</p>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-lg shadow text-center">
                        <h3 className="text-lg font-semibold text-purple-800">Completed</h3>
                        <p className="text-2xl font-bold text-purple-600">03</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg shadow text-center">
                        <h3 className="text-lg font-semibold text-green-800">Certificates</h3>
                        <p className="text-2xl font-bold text-green-600">02</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
