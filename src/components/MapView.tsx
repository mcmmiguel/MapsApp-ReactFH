import { useContext, useRef, useLayoutEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapContext, PlacesContext } from '../context';
import { Loading } from './Loading';

export const MapView = () => {

    const { isLoading, userLocation } = useContext(PlacesContext);
    const { setMap } = useContext(MapContext);
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new mapboxgl.Map({
                container: mapDiv.current!,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: userLocation,
                zoom: 15,
            });
            setMap(map);
        }
    }, [isLoading])

    if (isLoading) {
        return (<Loading />)
    }

    return (
        <div ref={mapDiv}
            style={{
                height: '100vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw',
            }}
        >

            {userLocation?.join(',')}

        </div>
    )
}