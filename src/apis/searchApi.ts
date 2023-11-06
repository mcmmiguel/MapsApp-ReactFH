import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibWNtbWlndWVsIiwiYSI6ImNsb2x3aWR0ZzBteXAyaW9hM3FtbGw4NGQifQ.SKUi1VvVcIXsob4PpFtz_g'
    }
});

export default searchApi;