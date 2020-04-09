import React, { useState, useEffect } from 'react';
import SelectDate from './SelectDate';
import PropTypes from 'prop-types';

const SelectDateContainer = ({ setDate, error }) => {

    const [date, selectDate] = useState();

    useEffect(() => {
        setDate(date)
    }, [setDate, date])

    return <SelectDate error={error} selectDate={selectDate} />
}

SelectDateContainer.propTypes = {
    setDate: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
}

export default SelectDateContainer;