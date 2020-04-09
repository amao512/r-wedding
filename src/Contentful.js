import { createClient } from 'contentful';

export const CitiesClient = createClient({
    space: process.env.REACT_APP_CITIES_SPACE,
    accessToken: process.env.REACT_APP_CITIES_ACCESS_TOKEN
})