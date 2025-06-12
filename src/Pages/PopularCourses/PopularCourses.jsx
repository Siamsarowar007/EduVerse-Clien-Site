import React, { useEffect, useState } from 'react';
import CourseCard from '../../Shared/CourseCard';
import axios from 'axios';

const PopularCourses = () => {
    const [popularCourses, setPopularCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularCourses = async () => {
            try {
                const res = await axios.get('http://localhost:5000/popular-courses');
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
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="my-16">
            <h2 className="text-4xl font-bold text-center mb-8">🔥 Popular Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
                {
                    popularCourses.map(course => <CourseCard key={course._id} course={course} />)
                }
            </div>
        </div>
    );
};

export default PopularCourses;
