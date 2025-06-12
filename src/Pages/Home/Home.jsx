import React, { Suspense } from 'react';
import OurCourses from '../OurCourses/OurCourses';
import LatestNews from './LatestNews';
import PopularCourses from '../PopularCourses/PopularCourses';





const coursesPromise = fetch('http://localhost:5000/courses')
    .then(res => res.json());

const Home = () => {



    return (
        <div>
            <title>Home || EduVerse</title>
            <h2 className='text-6xl font-bold text-center'>This is Home Page</h2>
            <PopularCourses></PopularCourses>
            <Suspense fallback={'Loading Course...'}>
                <OurCourses coursesPromise={coursesPromise}></OurCourses>
            </Suspense>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;