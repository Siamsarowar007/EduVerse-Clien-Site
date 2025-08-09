import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const DashboardHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12 border border-purple-200">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
                    Welcome to Your Dashboard
                </h1>

                {/* User Info */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                    <img
                        src={user?.photoURL}
                        alt="User"
                        className="w-28 h-28 rounded-full border-4 border-purple-400 shadow-md"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
                        <p className="text-gray-600 mt-1">{user?.email}</p>
                        <p className="text-sm mt-2 text-purple-700">
                            Thank you for being a part of EduVerse!
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-blue-100 p-5 rounded-lg shadow text-center">
                        <h3 className="text-lg font-semibold text-blue-800">Enrolled Courses</h3>
                        <p className="text-2xl font-bold text-blue-600">05</p>
                    </div>
                    <div className="bg-purple-100 p-5 rounded-lg shadow text-center">
                        <h3 className="text-lg font-semibold text-purple-800">Completed</h3>
                        <p className="text-2xl font-bold text-purple-600">03</p>
                    </div>
                    <div className="bg-green-100 p-5 rounded-lg shadow text-center">
                        <h3 className="text-lg font-semibold text-green-800">Certificates</h3>
                        <p className="text-2xl font-bold text-green-600">02</p>
                    </div>
                </div>

                {/* Nested Routes */}
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;


// import React, { useEffect, useState } from "react";
// // import useAuthContext from "../hooks/useAuthContext";
// import axios from "axios";
// import useAuthContext from "../hook/useAuthContext";

// const DashboardHome = () => {
//     const { user } = useAuthContext(); // user context থেকে নিলাম
//     const [enrolledCourses, setEnrolledCourses] = useState([]);

//     useEffect(() => {
//         if (user?.email) {
//             axios
//                 .get(`/api/enrollments?email=${user.email}`)
//                 .then((res) => {
//                     setEnrolledCourses(res.data);
//                 })
//                 .catch((err) => {
//                     console.error("Error fetching enrolled courses:", err);
//                 });
//         }
//     }, [user?.email]); // user পরিবর্তন হলে রিফেচ হবে

//     return (
//         <div>
//             <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>

//             <h2 className="text-xl font-semibold mb-2">Your Enrolled Courses</h2>
//             {enrolledCourses.length > 0 ? (
//                 <ul className="space-y-2">
//                     {enrolledCourses.map((course) => (
//                         <li
//                             key={course._id}
//                             className="p-3 border rounded shadow-sm"
//                         >
//                             {course.title}
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No courses enrolled yet.</p>
//             )}
//         </div>
//     );
// };

// export default DashboardHome;

