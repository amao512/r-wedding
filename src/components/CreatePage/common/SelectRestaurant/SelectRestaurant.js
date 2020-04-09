import React from 'react';
import InputForm from '../../../StyledComponents/InputForm';
import s from './restaurant.module.scss';
import RestaurantSlider from './RestaurantSlider/RestaurantSlider';
import PropTypes from 'prop-types';

const SelectRestaurant = props => {

    const {
        show, setShow, title,
        setTitle, changeTitle,
        restaurants, setRestaurant
    } = props

    return (
        <div className={s.selectRestaurants}>

            <div className={s.input}>
                <span className={
                    show || title !== '' || title !== undefined 
                    ? s.focusedPlaceholder : s.hidePlacholder
                }>Restaurant</span>

                <InputForm type='text' value={title || ''} 
                    onChange={e => changeTitle(e.target.value)} 
                    onClick={() => setShow(true)}    
                />

                <div className={show ? s.rotateArrows : s.arrows} 
                    onClick={() => setShow(!show)}
                >
                    <span className="material-icons">keyboard_arrow_down</span>
                </div>
            </div>

            <RestaurantSlider show={show} restaurants={restaurants} 
                            setTitle={setTitle} setRestaurant={setRestaurant}
            /> 
        </div>
    )
}

SelectRestaurant.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    title: PropTypes.string,
    setTitle: PropTypes.func.isRequired,
    changeTitle: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired,
    setRestaurant: PropTypes.func.isRequired
}

export default SelectRestaurant;