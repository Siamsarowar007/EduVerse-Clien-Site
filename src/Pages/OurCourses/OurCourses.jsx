import React, { use, useState } from 'react';
import CourseCard from '../../Shared/CourseCard';

const OurCourses = ({ coursesPromise }) => {
    const courses = use(coursesPromise);
    const [showAll, setShowAll] = useState(false);

    // কাটা list বানানো
    const displayedCourses = showAll ? courses : courses.slice(0, 6);

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className='text-5xl font-bold text-center my-8'>Our Courses</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    displayedCourses.map(course => <CourseCard key={course._id} course={course} />)
                }
            </div>

            <div className="flex justify-center mt-8">
                {
                    courses.length > 6 && (
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            {showAll ? 'Show Less' : 'View All'}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default OurCourses;
