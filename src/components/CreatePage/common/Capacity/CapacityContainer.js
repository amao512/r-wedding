import React, { useState, useEffect } from 'react';
import Capacity from './Capacity';

const CapacityContainer = ({ setCapacity, error }) => {

    const [number, setNumber] = useState();

    useEffect(() => {
        setCapacity(number)
    }, [setCapacity, number])

    return <Capacity error={error} setNumber={setNumber} />
}

export default CapacityContainer;