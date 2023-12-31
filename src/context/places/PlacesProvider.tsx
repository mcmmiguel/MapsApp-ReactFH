import { useEffect, useReducer } from 'react';
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../apis';
import { Feature, PlacesResponse } from '../../interfaces/places';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
    isLoadingPlaces: boolean;
    places: Feature[];
};

export interface PlacesProviderProps {
    children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
}

export const PlacesProvider = ({ children }: PlacesProviderProps) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation()
            .then(longLat => dispatch({ type: 'setUserLocation', payload: longLat }))
    }, []);

    const searchPlacesByQuery = async (query: string) => {

        if (query.length === 0) {
            dispatch({ type: 'setPlaces', payload: [] })
            return [];
        };

        if (!state.userLocation) throw new Error('Ubicación del usuario no disponible');

        dispatch({ type: 'setLoadingPlaces' });

        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        });

        dispatch({ type: 'setPlaces', payload: resp.data.features });

        return resp.data.features;

    };

    return (
        <PlacesContext.Provider value={{
            ...state,

            searchPlacesByQuery
        }}>
            {children}
        </PlacesContext.Provider>
    )
}