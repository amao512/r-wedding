import React from 'react';
import InputForm from '../../../StyledComponents/InputForm';
import s from './city.module.scss';

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
                       onClick={() => changeCity(city.name)}
                    >{city.name}</p>
                ))}
            </div>
        </div>
    )
}

export default SelectCity;