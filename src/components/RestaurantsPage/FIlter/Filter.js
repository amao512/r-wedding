import React, { useState } from 'react';
import s from './filter.module.scss';
import { connect } from 'react-redux';
import InputForm from '../../StyledComponents/InputForm';
import { filterRestaurants } from '../../../redux/restaurantsReducer';
import PropTypes from 'prop-types';

const Filter = ({ cities, filterRestaurants, setFilter }) => {

    const [filterCondition, setFilterCondition] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [capacity, setCapacity] = useState(0);
    
    const applyFilter = () => {
        filterRestaurants(selectedCity, capacity);
        setFilter(true);
        setFilterCondition(false);
    }

    return (
        <div className={s.filter}>
            {filterCondition && <div className={s.filterOpacity} onClick={() => setFilterCondition(false)} />}

            {filterCondition && 
               <div className={s.filterBlock}>
                    <div className={s.cityCapacity}>
                        
                        <div className={s.closeFilter} onClick={() => setFilterCondition(false)}>
                            <span className="material-icons">close</span>
                        </div>

                        <h3>City: {selectedCity}</h3>
                        <div className={s.cities}>
                            {cities.map((city, index) => (
                                <p key={index} className={selectedCity === city.name ? s.selectedCity : ''}
                                    onClick={() => setSelectedCity(city.fields.name)}
                                >{city.fields.name}</p>
                            ))}
                        </div>

                        <div className={s.capacity}>
                            <InputForm type='number' placeholder='Capacity'
                                        onChange={e => setCapacity(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className={s.applyFilter} onClick={applyFilter}>
                        <button>Apply</button>
                    </div>
               </div>
            }

            <div className={filterCondition ? s.hideFilter : s.openFilter} 
                onClick={() => setFilterCondition(!filterCondition)}
            >
                <span className="material-icons">{filterCondition ? 'close' : 'sort'}</span>
                {!filterCondition && <button>Filter</button>}
            </div>

        </div>
    )
}

const mstp = state => ({
    cities: state.city.data
})

Filter.propTypes = {
    cities: PropTypes.array.isRequired,
    filterRestaurants: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired
}

export default connect(mstp, { filterRestaurants })(Filter);