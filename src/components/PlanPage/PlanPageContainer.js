import React from 'react';
import { connect } from 'react-redux';
import PlanPage from './PlanPage';
import { FHF } from '../StyledComponents/404';
import PropTypes from 'prop-types';

const PlanPageContainer = ({ slug, plans }) => {

    const plan = plans.find(p => p.id === slug)

    if(plan === undefined){
        return (
            <FHF>
                <h1>404</h1>
                <h2>There is no such kind of plan</h2>
            </FHF>
        )
    }

    return <PlanPage {...plan} />
}

const mstp = state => ({
    plans: state.plans.data
})

PlanPageContainer.propTypes = {
    slug: PropTypes.string.isRequired,
    plans: PropTypes.array.isRequired
}

export default connect(mstp)(PlanPageContainer);