import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlanPage from '../components/PlanPage/PlanPage';
import { connect } from 'react-redux';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const SinglePlan = ({ plans }) => {
    return (
        <>
            <ScrollToTop>
                <Switch>
                    {plans.map((plan, index) => (
                        <Route key={index} path={`/plan/${plan.id}`} 
                                component={() => <PlanPage data={plan} />} 
                        />
                    ))}
                </Switch>
            </ScrollToTop>
        </>
    )
}

const mstp = state => ({
    plans: state.plans.data
})

export default connect(mstp)(SinglePlan);