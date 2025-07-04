import React, { Suspense } from 'react';
import OurCourses from '../OurCourses/OurCourses';
import LatestNews from './LatestNews';
import PopularCourses from '../PopularCourses/PopularCourses';
import WhyChooseUs from '../ExtraSection/WhyChooseUs';
import Testimonials from '../ExtraSection/Testimonials';
import UpcomingFeatures from '../ExtraSection/UpcomingFeatures';
import StatsAndNewsletter from '../ExtraSection/StatsAndNewsletter';
import FAQ from '../ExtraSection/FAQ';
import Banner from './Banner';
import SplashCursor from '../../Shared/SplashCursor';





const coursesPromise = fetch('https://assignment-11-server-site-ashen.vercel.app/courses')
    .then(res => res.json());

const Home = () => {



    return (
        <div>
            <title>Home || EduVerse</title>
            {/* <SplashCursor></SplashCursor> */}
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <Suspense fallback={'Loading Course...'}>
                <OurCourses coursesPromise={coursesPromise}></OurCourses>
            </Suspense>
            <LatestNews></LatestNews>
            {/* <WhyChooseUs></WhyChooseUs> */}
            {/* <Testimonials></Testimonials> */}
            {/* <UpcomingFeatures></UpcomingFeatures> */}
            <FAQ></FAQ>
            <StatsAndNewsletter></StatsAndNewsletter>
        </div>
    );
};

export default Home;