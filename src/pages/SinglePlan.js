import React from 'react';
import { withRouter } from 'react-router-dom';
import PlanPage from '../components/PlanPage/PlanPageContainer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { compose } from 'redux';

const SinglePlan = ({ match }) => {
    return (
        <>
            <ScrollToTop>
                <PlanPage slug={match.params.plan} />
            </ScrollToTop>
        </>
    )
}

export default compose(withRouter)(SinglePlan);