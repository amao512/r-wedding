import React, { useState } from 'react';
import SelectRestaurant from './SelectRestaurant';
import PropTypes from 'prop-types';

const SelectRestaurantContainer = ({ restaurants, setRestaurant }) => {

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState();

    const changeTitle = value => {
        setTitle(value);
        setRestaurant({title: value});
    }

    const nextProps = {
        show, setShow, title,
        setTitle, changeTitle,
        restaurants, setRestaurant
    }

    return <SelectRestaurant {...nextProps} />
}

SelectRestaurantContainer.propTypes = {
    restaurants: PropTypes.array.isRequired,
    setRestaurant: PropTypes.func.isRequired
}

export default SelectRestaurantContainer;