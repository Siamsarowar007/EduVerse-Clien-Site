import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import CourseCard from '../../Shared/CourseCard';

const AllCourses = () => {
    const courses = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Extract unique categories for the dropdown
    const categories = useMemo(
        () => [...new Set(courses.map(course => course.category))],
        [courses]
    );

    // Filtered by search term
    const filteredBySearch = useMemo(
        () => courses.filter(course =>
            course.course_title.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [courses, searchTerm]
    );

    // Further filter by selected category
    const displayedCourses = useMemo(
        () => selectedCategory
            ? filteredBySearch.filter(course => course.category === selectedCategory)
            : filteredBySearch,
        [filteredBySearch, selectedCategory]
    );

    return (
        <div className="max-w-7xl mx-auto px-4">
            <title>All Course || EduVerse</title>
            <h2 className='text-5xl text-blue-500 font-bold text-center mb-8 mt-8'>Our All Courses</h2>

            {/* Search & Category Filter */}
            <div className="mb-10 text-center">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search by course title..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <select
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className="w-full md:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Course Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {displayedCourses.length > 0 ? (
                    displayedCourses.map(course => (
                        <CourseCard key={course._id} course={course} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-lg">No courses found.</p>
                )}
            </div>
        </div>
    );
};

export default AllCourses;
