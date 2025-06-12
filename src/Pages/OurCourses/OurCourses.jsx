import React, { use } from 'react';
import CourseCard from '../../Shared/CourseCard';

const OurCourses = ({ coursesPromise }) => {
    const courses = use(coursesPromise);
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-8'>Our Courses</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    courses.map(course => <CourseCard key={course._id} course={course} />)
                }
            </div>

        </div>
    );
};

export default OurCourses;