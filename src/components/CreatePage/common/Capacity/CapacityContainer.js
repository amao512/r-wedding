import React, { useState, useEffect } from 'react';
import Capacity from './Capacity';
import PropTypes from 'prop-types';

const CapacityContainer = ({ setCapacity, error }) => {

    const [number, setNumber] = useState();

    useEffect(() => {
        setCapacity(number)
    }, [setCapacity, number])

    return <Capacity error={error} setNumber={setNumber} />
}

CapacityContainer.propTypes = {
    setCapacity: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
}

export default CapacityContainer;