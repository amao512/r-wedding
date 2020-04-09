import React from 'react';
import Banner from './common/Banner/Banner';
import img from '../../assets/images/banner/banner.jpg';
import Couple from './common/Couple/Couple';
import Info from './common/Info/Info';
import Restaurant from './common/Restaurant/Restaurant';
import PropTypes from 'prop-types';

const PlanPage = props => {

    const { 
        category, names: { groom, bride }, 
        date, city, capacity, invite,
         desc, restaurant 
    } = props;

    return (
        <div>
            <div className='container'>
                <Banner img={img} category={category} 
                        names={`${groom.name} & ${bride.name}`} 
                        date={date}
                />

                <Couple groom={groom} bride={bride}/>

                <Info category={category} date={date} 
                      city={city} capacity={capacity}
                      inviting={invite}
                      desc={desc}
                />

                <Restaurant restaurant={restaurant} />
            </div>
        </div>
    )
}

PlanPage.propTypes = {
    category: PropTypes.string,
    names: PropTypes.object.isRequired,
    date: PropTypes.string,
    city: PropTypes.string,
    capacity: PropTypes.string,
    invite: PropTypes.string,
    desc: PropTypes.string,
    restaurant: PropTypes.object.isRequired
}

export default PlanPage;