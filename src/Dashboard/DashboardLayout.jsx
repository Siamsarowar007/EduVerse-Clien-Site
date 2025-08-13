

import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import NavImg from '../../public/EduVerse.png';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

// React Icons
import { MdDashboard, MdLibraryBooks, MdAddBox, MdManageAccounts, MdLogout, MdMenu, MdClose } from "react-icons/md";

const DashboardLayout = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login'); 
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const normalStyle = "flex items-center gap-2 text-blue-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-500 hover:text-white px-4 py-2 rounded-lg font-medium transition duration-300";
    const activeStyle = "flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold";

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Mobile Menu Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-md"
                onClick={() => setIsSidebarOpen(true)}
            >
                <MdMenu size={24} />
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed min-h-screen lg:static top-0 left-0 h-full w-64 bg-white shadow-md px-5 py-6 border-r border-gray-200 flex flex-col justify-between transform transition-transform duration-300 z-50 
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >
                <div>
                    {/* Close Button for Mobile */}
                    <div className="flex justify-between items-center mb-6 lg:hidden">
                        <div className="flex items-center gap-2">
                            <img src={NavImg} alt="Logo" className="w-10 h-10 object-contain" />
                            <h2 className="text-xl font-extrabold text-blue-700">EduVerse</h2>
                        </div>
                        <button
                            className="text-gray-600 hover:text-red-500"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <MdClose size={24} />
                        </button>
                    </div>

                    {/* Desktop Logo */}
                    <Link to='/' className="hidden lg:flex items-center gap-2 ml-3 mb-10">
                        <img src={NavImg} alt="Logo" className="w-10 h-10 object-contain" />
                        <h2 className="text-xl font-extrabold text-blue-700">EduVerse</h2>
                    </Link>

                    {/* Sidebar Navigation */}
                    <nav className="flex flex-col gap-3">
                        <NavLink to="/dashboard" end className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                            <MdDashboard className="text-lg" />
                            Dashboard
                        </NavLink>

                        <NavLink to="/dashboard/myEnrollments" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                            <MdLibraryBooks className="text-lg" />
                            My Enrollments
                        </NavLink>

                        <NavLink to="/dashboard/addCourse" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                            <MdAddBox className="text-lg" />
                            Add Course
                        </NavLink>

                        <NavLink to="/dashboard/manageCourses" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                            <MdManageAccounts className="text-lg" />
                            Manage Courses
                        </NavLink>
                    </nav>
                </div>

                {/* Logout Button */}
                <div className="mt-10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        <MdLogout className="text-lg" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
