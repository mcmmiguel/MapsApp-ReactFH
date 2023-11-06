import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibWNtbWlndWVsIiwiYSI6ImNsb2x3aWR0ZzBteXAyaW9hM3FtbGw4NGQifQ.SKUi1VvVcIXsob4PpFtz_g'
    }
});

export default directionsApi;