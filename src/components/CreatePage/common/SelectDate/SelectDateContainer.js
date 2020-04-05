import React, { useState, useEffect } from 'react';
import SelectDate from './SelectDate';

const SelectDateContainer = ({ setDate, error }) => {

    const [date, selectDate] = useState();

    useEffect(() => {
        setDate(date)
    }, [setDate, date])

    return <SelectDate error={error} selectDate={selectDate} />
}

export default SelectDateContainer;