import { useReducer } from 'react';
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from './placesReducer';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
};

export interface PlacesProviderProps {
    children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
}

export const PlacesProvider = ({ children }: PlacesProviderProps) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    return (
        <PlacesContext.Provider value={{
            ...state,
        }}>
            {children}
        </PlacesContext.Provider>
    )
}

function useReduce(first: any, second: any, third: any): [any, any] {
    throw new Error("Function not implemented.");
}
