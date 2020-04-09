import React from 'react';
import s from './wedding.module.scss';
import SelectDate from '../common/SelectDate/SelectDateContainer';
import WeddingNames from '../common/WedidngNames/WeddingNamesContainer';
import SelectCity from '../common/SelectCity/SelectCityContainer';
import Capacity from '../common/Capacity/CapacityContainer';
import SelectRestaurant from '../common/SelectRestaurant/SelectRestaurantContainer';
import ErrorForm from '../common/Error/Error';
import FormButton from '../../StyledComponents/FormButton';
import { NavLink } from 'react-router-dom';
import Invite from '../common/Invite/Invite';
import Desc from '../common/Desc/Desc';
import PropTypes from 'prop-types';


const Wedding = props => {

    const {
        setNames, setDate, setCapacity, 
        setCity, error, setError,
        restaurantCondition, restaurants, 
        setRestaurant, nextForm,
        collectWeddingData, setInvite,
        setDesc
    } = props;
    
    return (
        <div className={s.wedding}>
            <div className={s.forms}>
                <WeddingNames setNames={setNames} error={error} />
            </div>

            <div className={s.forms}>
                <Capacity setCapacity={setCapacity} error={error} />
                <SelectCity setCity={setCity} error={error} />
            </div>

            <div className={s.restForms}>
                <SelectDate  setDate={setDate} error={error} />
                <Invite setInvite={setInvite} error={error} />
                <Desc setDesc={setDesc} error={error} />

                {restaurantCondition && 
                    <SelectRestaurant restaurants={restaurants} 
                                    setRestaurant={setRestaurant}
                    />
                }
            </div>
           
            <ErrorForm error={error} setError={setError} />

            {restaurantCondition
                ? <NavLink to='/prove/prove-wedding'>
                    <FormButton onClick={collectWeddingData}>Create</FormButton>
                  </NavLink>
                : <FormButton onClick={nextForm}>Next</FormButton>
            }

        </div>
    )
}

Wedding.propTypes = {
    setNames: PropTypes.func.isRequired,
    setDate: PropTypes.func.isRequired,
    setCapacity: PropTypes.func.isRequired,
    setCity: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    setError: PropTypes.func.isRequired,
    restaurantCondition: PropTypes.bool.isRequired,
    restaurants: PropTypes.array.isRequired,
    setRestaurant: PropTypes.func.isRequired,
    nextForm: PropTypes.func.isRequired,
    collectWeddingData: PropTypes.func.isRequired,
    setInvite: PropTypes.func.isRequired,
    setDesc: PropTypes.func.isRequired
}

export default Wedding;