import { CitiesClient, RestaurantsClient } from '../Contentful';

export const API = {
    getData: () => {
        return JSON.parse(localStorage.getItem('plans'));
    },
    setPlan: plans => {
        return localStorage.setItem('plans', JSON.stringify(plans));
    },
    getCities: async () => {
        try {
            return await CitiesClient.getEntries({
                content_type: 'cities',
                order: ''
            })
        } catch (error) {
            console.log(error);
        }
    },
    getRestaurants: async () => {
        try {
            return await RestaurantsClient.getEntries({
                content_type: 'restaurants'
            })
        } catch (error) {
            console.log(error);
        }
    }
}