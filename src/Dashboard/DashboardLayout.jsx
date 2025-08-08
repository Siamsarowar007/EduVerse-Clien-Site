import React from 'react';
import { NavLink, Outlet } from 'react-router';
import NavImg from '../../public/EduVerse.png'; 

const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md px-5 py-6 border-r border-gray-200">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-10">
                    <img src={NavImg} alt="Logo" className="w-10 h-10 object-contain" />
                    <h2 className="text-xl font-extrabold text-blue-700">EduVerse</h2>
                </div>

                {/* Sidebar Navigation */}
                <nav className="flex flex-col gap-3">
                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold"
                                : "text-blue-800 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium"
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/dashboard/myEnrollments"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold"
                                : "text-blue-800 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium"
                        }
                    >
                        My Enrollments
                    </NavLink>

                    <NavLink
                        to="/dashboard/addCourse"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold"
                                : "text-blue-800 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium"
                        }
                    >
                        Add Course
                    </NavLink>

                    <NavLink
                        to="/dashboard/manageCourses"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold"
                                : "text-blue-800 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium"
                        }
                    >
                        Manage Courses
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
