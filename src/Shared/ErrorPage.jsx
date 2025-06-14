import React from 'react';
import { Link } from 'react-router';  

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#e6f0ff] via-white to-[#cce0ff] px-4">
            <title>ErrorPage || EduVerse</title>
            <h1 className="text-8xl font-extrabold text-[#002f6c] mb-4 drop-shadow-lg">404</h1>
            <h2 className="text-3xl font-bold text-[#f58220] mb-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 text-center max-w-md mb-8">
                Sorry, the page you are looking for could not be found. Please go back to the homepage or try another link.
            </p>
            <Link 
                to="/"
                className="px-8 py-3 bg-gradient-to-r from-[#004080] to-[#3366cc] text-white font-semibold rounded-lg shadow-lg hover:from-[#003366] hover:to-[#274b8f] transition duration-300"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;
