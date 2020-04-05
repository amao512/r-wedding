import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProvePage from './ProvePage';

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
            <div style={
                {'textAlign': 'center', 'margin': '30px 50px 50px', 'border': '3px solid red', 'padding': '10px 20px'}
            }>
                <h2 style={{'color': 'red'}}>Warning! At first fill the forms</h2>
            </div>
        )
    }

    return <ProvePage {...props} />
}

const mstp = state => ({
    wedding: state.wedding.data
})

ProvePage.propTypes = {
    wedding: PropTypes.object.isRequired
}

export default connect(mstp)(ProvePageContainer);