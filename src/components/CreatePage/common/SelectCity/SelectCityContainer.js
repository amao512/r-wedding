import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SelectCity from './SelectCity';

const SelectCityContainer = ({ cities, setCity, error }) => {

    const [select, setSelect] = useState(false);
    const [city, selectCity] = useState('');

    const changeCity = value => {
        selectCity(value)
        setSelect(false)
        setCity(value)
    }

    useEffect(() => {
        setCity(city)
    }, [setCity, city])

    const nextProps = {
        changeCity, select, cities, 
        error, selectCity, setSelect,
        city, setCity
    }

    return <SelectCity {...nextProps} />
}

const mstp = state => ({
    cities: state.city.data
})

export default connect(mstp)(SelectCityContainer);