import React from 'react';
import Banner from './common/Banner/Banner';
import img from '../../assets/images/banner/banner.jpg';
import Couple from './common/Couple/Couple';
import Info from './common/Info/Info';
import Restaurant from './common/Restaurant/Restaurant';

const PlanPage = ({ data }) => {

    const {
        names: {groom, bride}, 
        category, date, city, 
        capacity, restaurant,
        invite, desc
    } = data;

    return (
        <div>
            <div className='container'>
                <Banner img={img} category={data.category} 
                        names={`${groom.name} & ${bride.name}`} 
                        date={data.date}
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

export default PlanPage;