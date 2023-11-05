import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoibWNtbWlndWVsIiwiYSI6ImNsb2x3aWR0ZzBteXAyaW9hM3FtbGw4NGQifQ.SKUi1VvVcIXsob4PpFtz_g';

if (!navigator.geolocation) {
  alert('Tu navegador no está habilitado para geolocalización');
  throw new Error('Tu navegador no está habilitado para geolocalización');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);