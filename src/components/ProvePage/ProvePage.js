import React from 'react';
import img from '../../assets/images/organizations/Image-05.jpg'
import Prove from './common/Prove';

const ProvePage = ({ wedding, plans }) => {

    const {names, date, city, capacity, restaurant, category} = wedding;

    return (
        <>
            <Prove img={img} data={wedding} 
                    category={category} plans={plans} 
            >
                <>
                    <div>
                        <h3>Groom:</h3>
                        <p>{names.groom.name} {names.groom.lastName}</p>
                    </div>
                    <div>
                        <h3>Bride:</h3>
                        <p>{names.bride.name} {names.bride.lastName}</p>
                    </div>
                    <div>
                        <h3>City:</h3><p>{city}</p>
                    </div>
                    <div>
                        <h3>Date:</h3><p>{date}</p>
                    </div>
                    <div>
                        <h3>Capacity:</h3><p>{capacity}</p>
                    </div>
                    <div>
                        <h3>Restaurant:</h3><p>{restaurant.title}</p>
                    </div>
                </>
            </Prove>
        </>
    )
}

export default ProvePage;