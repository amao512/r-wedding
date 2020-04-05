import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import RestaurantPage from '../components/RestaurantPage/RestaurantPage';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const SingleRestaurant = ({ match }) => {
    return (
        <>
            <ScrollToTop>
                <RestaurantPage slug={match.params.restaurant} />
            </ScrollToTop>
        </>
    )
}

export default compose(withRouter)(SingleRestaurant);