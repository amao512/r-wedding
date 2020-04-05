import React from 'react';
import Banner from '../components/Banner/Banner';
import banner from '../assets/images/banner/home-banner.jpg';
import Restaurants from '../components/HomePage/Restaurants';
import Event from '../components/HomePage/Event';
import StartForm from '../components/HomePage/CreatePlanForm';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Home = () => {
    return (
        <>
            <ScrollToTop>
                <Banner img={banner} title='Honey wedding' />
                <Event />
                <Restaurants />
                <StartForm/>
            </ScrollToTop>
        </>
    )
}

export default Home;