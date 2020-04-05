import React from 'react';
import s from './home.module.scss';
import Title from '../StyledComponents/Title';
import { connect } from 'react-redux';

const Restaurants = ({ restaurants }) => {
    return (
        <div className='container'>
            <Title>Restaurants</Title>

            <div className={s.restaurants}>
                {restaurants.map((item, index) => (
                    <div key={index} className={s.single} 
                    style={{'backgroundImage': `url(${item.img})`}}>
                        <p>{item.title}</p>
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