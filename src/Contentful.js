import { createClient } from 'contentful';

export const CitiesClient = createClient({
    space: process.env.REACT_APP_CITIES_SPACE,
    accessToken: process.env.REACT_APP_CITIES_ACCESS_TOKEN
})

export const RestaurantsClient = createClient({
    space: process.env.REACT_APP_RESTAURANTS_SPACE,
    accessToken: process.env.REACT_APP_RESTAURANTS_ACCESS_TOKEN
})