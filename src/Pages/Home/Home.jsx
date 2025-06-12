import React, { Suspense } from 'react';
import OurCourses from '../OurCourses/OurCourses';
import LatestNews from './LatestNews';





const coursesPromise = fetch('http://localhost:5000/courses')
    .then(res => res.json());

const Home = () => {



    return (
        <div>
            <h2 className='text-6xl font-bold text-center'>This is Home Page</h2>
            <Suspense fallback={'Loading Course...'}>
                <OurCourses coursesPromise={coursesPromise}></OurCourses>
            </Suspense>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;