import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import RestaurantPage from '../components/RestaurantPage/RestaurantPage';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import PropTypes from 'prop-types';

const SingleRestaurant = ({ match }) => {
    return (
        <>
            <ScrollToTop>
                <RestaurantPage slug={match.params.restaurant} />
            </ScrollToTop>
        </>
    )
}

SingleRestaurant.propTypes = {
    match: PropTypes.object.isRequired
}

export default compose(withRouter)(SingleRestaurant);