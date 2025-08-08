import React from 'react';
import { NavLink, Outlet } from 'react-router';
import NavImg from '../../public/EduVerse.png'; // adjust path if needed

const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg border-r border-gray-200 px-4 py-6">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8">
                    <img src={NavImg} alt="Logo" className="w-10 h-10" />
                    <h2 className="text-xl font-bold text-blue-700">EduVerse</h2>
                </div>

                {/* Sidebar Navigation */}
                <nav className="space-y-3">
                    <NavLink to="/dashboard" className={({ isActive }) =>
                        isActive
                            ? "block text-white bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-lg font-semibold"
                            : "block text-blue-800 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium"
                    }>
                        Dashboard
                    </NavLink>
                    <NavLink to="/dashboard/enrollments" className={({ isActive }) =>
                        isActive
                            ? "block text-white bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-lg font-semibold"
                            : "block text-blue-800 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium"
                    }>
                        My Enrollments
                    </NavLink>
                    {/* Add more nav links as needed */}
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-100 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
