// import React, { useContext } from 'react';
// import { AuthContext } from '../Contexts/AuthContext/AuthContext';
// import { NavLink } from 'react-router';
// import NavImg from '../../public/EduVerse.png'



// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);

//     const handleLogout = () => {
//         logOut()
//             .then(() => {
//                 console.log("User logged out successfully");
//             })
//             .catch((error) => {
//                 console.error("Error logging out:", error);
//             });
//     };

//     // Style classes
//     const activeStyle = "bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg";
//     const normalStyle = "text-blue-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-500 hover:text-white px-4 py-2 rounded-lg font-medium transition duration-300";

//     // links 
//     const PublicLinks = (
//         <>
//             <li><NavLink to="/" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Home</NavLink></li>
//             <li><NavLink to="/allCourses" className={({ isActive }) => isActive ? activeStyle : normalStyle}>All Courses</NavLink></li>
//             <li><NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : normalStyle}>About</NavLink></li>
//             <li><NavLink to="/service" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Service</NavLink></li>
//         </>
//     );

//     const PrivateLinks = (
//         <>
//             <li><NavLink to="/" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Home</NavLink></li>
//             <li><NavLink to="/allCourses" className={({ isActive }) => isActive ? activeStyle : normalStyle}>All Courses</NavLink></li>
//             <li><NavLink to="/addCourse" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Add Course</NavLink></li>
//             <li><NavLink to="/manageCourses" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Manage Courses</NavLink></li>
//             <li><NavLink to="/myEnrollments" className={({ isActive }) => isActive ? activeStyle : normalStyle}>My Enrollment</NavLink></li>
//             <li><NavLink to="/feedback" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Feedback</NavLink></li>
//             <li><NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : normalStyle}>About</NavLink></li>
//             <li><NavLink to="/service" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Service</NavLink></li>
//         </>
//     );

//     return (
//         <div className="navbar bg-gradient-to-r  from-blue-100 via-white to-purple-100 px-2 md:px-8 shadow-md sticky top-0 z-50">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow">
//                         {user ? PrivateLinks : PublicLinks}
//                     </ul>
//                 </div>
//                 <div className='flex gap-2'>
//                     <img className='w-[40px]  gap-2' src={NavImg} alt="" />
//                     <h2 className='text-2xl font-extrabold hidden md:block text-blue-700'>EduVerse</h2>
//                 </div>
                
//             </div>

//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {user ? PrivateLinks : PublicLinks}
//                 </ul>
//             </div>

//             <div className="navbar-end">
//                 {
//                     user ? (
//                         <div className="dropdown dropdown-end">
//                             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                                 <div className="w-12 rounded-full border-2 border-purple-400">
//                                     <img src={user.photoURL} alt="User" />
//                                 </div>
//                             </label>
//                             <ul tabIndex={0} className="mt-3 p-3 shadow menu menu-sm dropdown-content bg-white rounded-box w-60">
//                                 <li className="text-blue-700 font-semibold px-2 py-1">{user.displayName}</li>
//                                 <li><button onClick={handleLogout} className="btn bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg text-white mt-2">Logout</button></li>
//                             </ul>
//                         </div>
//                     ) : (
//                         <>
//                             <NavLink to='/login' className="btn bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-lg">Login</NavLink>
//                             <NavLink to='/register' className="btn bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg ml-2">Register</NavLink>
//                         </>
//                     )
//                 }
//             </div>
//         </div>
//     );
// };

// export default Navbar;




import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { NavLink } from 'react-router'; // ✅ Fixed import
import NavImg from '../../public/EduVerse.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("User logged out successfully");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };

    // Style classes
    const activeStyle = "bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg";
    const normalStyle = "text-blue-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-500 hover:text-white px-4 py-2 rounded-lg font-medium transition duration-300";

    // Public nav links
    const PublicLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Home</NavLink></li>
            <li><NavLink to="/allCourses" className={({ isActive }) => isActive ? activeStyle : normalStyle}>All Courses</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : normalStyle}>About</NavLink></li>
            <li><NavLink to="/service" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Service</NavLink></li>
        </>
    );

    // Private nav links
    const PrivateLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Home</NavLink></li>
            <li><NavLink to="/allCourses" className={({ isActive }) => isActive ? activeStyle : normalStyle}>All Courses</NavLink></li>
            <li><NavLink to="/addCourse" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Add Course</NavLink></li>
            <li><NavLink to="/manageCourses" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Manage Courses</NavLink></li>
            <li><NavLink to="/myEnrollments" className={({ isActive }) => isActive ? activeStyle : normalStyle}>My Enrollment</NavLink></li>
            <li><NavLink to="/feedback" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Feedback</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : normalStyle}>About</NavLink></li>
            <li><NavLink to="/service" className={({ isActive }) => isActive ? activeStyle : normalStyle}>Service</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-blue-100 via-white to-purple-100 px-2 md:px-8 shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {user ? PrivateLinks : PublicLinks}
                    </ul>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-[40px]' src={NavImg} alt="Logo" />
                    <h2 className='text-2xl font-extrabold hidden md:block text-blue-700'>EduVerse</h2>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {user ? PrivateLinks : PublicLinks}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full border-2 border-purple-400">
                                    <img src={user.photoURL} alt="User" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-3 shadow menu menu-sm dropdown-content bg-white rounded-box w-60">
                                <li className="text-blue-700 font-semibold px-2 py-1">{user.displayName}</li>

                                {/* ✅ Dashboard link added here */}
                                <li>
                                    <NavLink to="/dashboard" className="flex items-center gap-2 text-blue-800 font-medium hover:bg-blue-100 rounded px-2 py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 2v10" />
                                        </svg>
                                        Dashboard
                                    </NavLink>
                                </li>

                                <li>
                                    <button onClick={handleLogout} className="btn bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg text-white mt-2">Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <NavLink to='/login' className="btn bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-lg">Login</NavLink>
                            <NavLink to='/register' className="btn bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg ml-2">Register</NavLink>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;

