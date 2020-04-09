import React from 'react';
import InputForm from '../../../StyledComponents/InputForm';
import s from './city.module.scss';
import PropTypes from 'prop-types';

const SelectCity = props => {

    const { 
        changeCity, select, cities, 
        error, selectCity, setSelect, 
        city, setCity 
    } = props;

    return (
        <div className={s.selectCity}>

            <div className={city ? s.focusedInput : s.input}>
                <span className={s.placeholder}>City</span>
                <InputForm value={city}
                            background={error}
                            onClick={() => setSelect(true)}
                            onChange={e => {
                            selectCity(e.target.value)
                            setCity(e.target.value)
                        }}
                        onFocus={() => setSelect(false)}
                />

                <div className={select ? s.rotateArrows : s.arrows} 
                        onClick={() => setSelect(!select)}
                    >
                    <span className="material-icons">keyboard_arrow_down</span>
                </div>
            </div>

            <div className={select ? s.section : s.hideSection}>
                {cities.map((city, index) => (
                    <p key={index}
                       className={s.option}
                       onClick={() => changeCity(city.fields.name)}
                    >{city.fields.name}</p>
                ))}
            </div>
        </div>
    )
}

SelectCity.propTypes = {
    changeCity: PropTypes.func.isRequired,
    select: PropTypes.bool.isRequired,
    cities: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
    selectCity: PropTypes.func.isRequired,
    setSelect: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    setCity: PropTypes.func.isRequired
}

export default SelectCity;