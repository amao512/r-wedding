import React from 'react';
import RestaurantsPage from '../components/RestaurantsPage/RestaurantsPage';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Restaurants = () => {
    return (
        <>
            <ScrollToTop>
                <RestaurantsPage />
            </ScrollToTop>
        </>
    )
}

export default Restaurants;