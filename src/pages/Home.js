import React from 'react';
import Banner from '../components/Banner/Banner';
import banner from '../assets/images/banner/home-banner.jpg';
import RestaurantsList from '../components/RestaurantsList/RestaurantsList';
import Event from '../components/HomePage/Event';
import StartForm from '../components/HomePage/CreatePlanForm';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { connect } from 'react-redux';
import { getLastRestaurants } from '../selectors/selectors';
import Title from '../components/StyledComponents/Title';

const Home = ({ restaurants }) => {
    return (
        <>
            <ScrollToTop>
                <Banner img={banner} title='Honey wedding' />
                <Event />

                <Title>Restaurants</Title>
                <RestaurantsList restaurants={restaurants} />
                
                <StartForm/>
            </ScrollToTop>
        </>
    )
}

const mstp = state => ({
    restaurants: getLastRestaurants(state.restaurants.data)
})

export default connect(mstp)(Home);