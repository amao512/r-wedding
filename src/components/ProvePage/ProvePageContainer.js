import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProvePage from './ProvePage';
import { FHF } from '../StyledComponents/404';

const ProvePageContainer = props => {

    const {names, date, city, capacity, restaurant} = props.wedding;

    if(
        names === undefined || 
        date === undefined || 
        city === undefined || 
        capacity === undefined || 
        restaurant === undefined
    ){
        return (
            <FHF>
                <h1>404</h1>
                <h2>You did not create a plan!</h2>
            </FHF>
        )
    }

    return <ProvePage {...props} />
}

const mstp = state => ({
    wedding: state.wedding.data,
    plans: state.plans.data
})

ProvePage.propTypes = {
    wedding: PropTypes.object.isRequired
}

export default connect(mstp)(ProvePageContainer);