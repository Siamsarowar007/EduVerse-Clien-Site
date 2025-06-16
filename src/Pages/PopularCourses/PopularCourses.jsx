import React, { useEffect, useState } from 'react';
import CourseCard from '../../Shared/CourseCard';
import axios from 'axios';

const PopularCourses = () => {
    const [popularCourses, setPopularCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularCourses = async () => {
            try {
                const res = await axios.get('https://assignment-11-server-site-ashen.vercel.app/popular-courses');
                setPopularCourses(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to load popular courses:", error);
            }
        };

        fetchPopularCourses();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="my-16 max-w-7xl mx-auto  bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg">
            <h2 className="text-4xl pt-6 font-bold text-center mb-8">🔥 Popular Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 px-6">
                {
                    popularCourses.map(course => <CourseCard key={course._id} course={course} />)
                }
            </div>
        </div>
    );
};

export default PopularCourses;
