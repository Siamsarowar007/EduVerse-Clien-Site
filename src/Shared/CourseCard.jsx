import React from 'react';
import { useNavigate } from 'react-router';

const CourseCard = ({ course }) => {
    const { _id, course_title, instructorName, photo, category, createdAt } = course;
    const navigate = useNavigate();

    // Format date
    const formattedDate = createdAt
        ? new Date(createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
        : '';

    return (
        <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-xl border border-blue-200 w-full max-w-xs mx-auto hover:scale-105 transition-transform duration-300">
            <div className="overflow-hidden rounded-t-2xl h-48 flex items-center justify-center bg-blue-50">
                <img
                    src={photo}
                    alt={course_title}
                    className="object-cover h-full w-full transition-transform duration-300 hover:scale-110"
                />
            </div>
            <div className="p-5 flex flex-col gap-2">
                <h2 className="font-extrabold text-xl text-blue-800 truncate">{course_title}</h2>
                <div className="flex items-center text-sm text-gray-500 gap-2">
                    <span className="material-icons text-base text-blue-400">calendar_today</span>
                    <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <span className="material-icons text-base text-blue-400">person</span>
                    <span className="font-semibold">{instructorName}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <span className="material-icons text-base text-blue-400">category</span>
                    <span>{category}</span>
                </div>
                <button
                    className="mt-4 bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-bold py-2 rounded-lg shadow-lg transition-all duration-200"
                    onClick={() => navigate(`/courses/${_id}`)}
                >
                    Details
                </button>
            </div>
        </div>
    );
};

export default CourseCard;