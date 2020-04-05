import React from 'react';
import s from './home.module.scss';
import Title from '../StyledComponents/Title';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Restaurants = ({ restaurants }) => {
    return (
        <div className='container'>
            <Title>Restaurants</Title>

            <div className={s.restaurants}>
                {restaurants.map((item, index) => (
                    <div key={index} className={s.single} 
                    style={{'backgroundImage': `url(${item.img})`}}>
                        <NavLink to={`restaurants/${item.slug}`}>
                            <p>{item.title}</p>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mstp = state => ({
    restaurants: state.restaurants.data
})

export default connect(mstp)(Restaurants);