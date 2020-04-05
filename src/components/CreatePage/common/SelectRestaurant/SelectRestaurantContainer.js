import React, { useState } from 'react';
import SelectRestaurant from './SelectRestaurant';

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

export default SelectRestaurantContainer;