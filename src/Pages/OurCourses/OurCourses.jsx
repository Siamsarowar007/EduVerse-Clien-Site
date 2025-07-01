import React, { use, useState } from 'react';
import CourseCard from '../../Shared/CourseCard';
import { Link } from 'react-router';

const OurCourses = ({ coursesPromise }) => {
    const courses = use(coursesPromise);
    const [showAll, setShowAll] = useState(false);
    console.log(setShowAll);

    const displayedCourses = showAll ? courses : courses.slice(0, 8);

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className='text-5xl text-blue-500 font-bold text-center mb-16 mt-8'>Our Courses</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    displayedCourses.map(course => <CourseCard key={course._id} course={course} />)
                }
            </div>

            <div className="flex justify-center mt-8">
                {
                    // Show "View All" link if not showing all
                    !showAll && courses.length > 8 && (
                        <Link to="/allCourses">
                            <button
                                className="bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white py-2 px-6 rounded-lg text-lg transition-all duration-300"
                            >
                                View All
                            </button>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default OurCourses;
