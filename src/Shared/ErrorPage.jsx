import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8fafc] px-4">
            <title>ErrorPage || EduVerse</title>
            <h1 className="text-8xl font-extrabold text-[#002f6c] mb-4">404</h1>
            <h2 className="text-3xl font-bold text-[#f58220] mb-2">Oops! Page Not Found</h2>
            <p className="text-gray-600 text-center max-w-md mb-6">
                Sorry, the page you are looking for could not be found. Please go back to the homepage or check another link.
            </p>
            <Link 
                to="/"
                className="px-8 py-3 bg-[#002f6c] text-white font-semibold rounded-lg shadow-md hover:bg-[#001f4d] transition"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;
