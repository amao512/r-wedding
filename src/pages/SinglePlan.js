import React from 'react';
import { withRouter } from 'react-router-dom';
import PlanPage from '../components/PlanPage/PlanPageContainer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { compose } from 'redux';
import PropTypes from 'prop-types';

const SinglePlan = ({ match }) => {
    return (
        <>
            <ScrollToTop>
                <PlanPage slug={match.params.plan} />
            </ScrollToTop>
        </>
    )
}

SinglePlan.propTypes = {
    match: PropTypes.object.isRequired
}

export default compose(withRouter)(SinglePlan);