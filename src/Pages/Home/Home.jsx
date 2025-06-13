import React, { Suspense } from 'react';
import OurCourses from '../OurCourses/OurCourses';
import LatestNews from './LatestNews';
import PopularCourses from '../PopularCourses/PopularCourses';
import WhyChooseUs from '../ExtraSection/WhyChooseUs';
import Testimonials from '../ExtraSection/Testimonials';
import UpcomingFeatures from '../ExtraSection/UpcomingFeatures';
import StatsAndNewsletter from '../ExtraSection/StatsAndNewsletter';





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
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
            <UpcomingFeatures></UpcomingFeatures>
            <StatsAndNewsletter></StatsAndNewsletter>
        </div>
    );
};

export default Home;