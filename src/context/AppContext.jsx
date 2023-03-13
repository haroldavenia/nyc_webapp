// Framework and third-party non-ui
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { _updateMapView, _updateSelectedParcel } from './MapController';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    // App Framework
    const [selectedParcel, setSelectedParcel] = useState(null);

    // ----- JSAPI State -----
    const [mapView, setMapView] = useState(null);
    const [parcelLayerView, setParcelLayerView] = useState(null);
    const [parcelHighightHandle, setParcelHighightHandle] = useState(null);

    // Setters
    const updateMapView = async (mapView) => {
        // Add mapView to context
        await _updateMapView({ mapView, setParcelLayerView }, setMapView);
    };

    const updateSelectedParcel = async (value) => {
        await _updateSelectedParcel(
            { mapView, parcelLayerView, value, parcelHighightHandle, setParcelHighightHandle },
            setSelectedParcel
        );
    };

    return (
        <AppContext.Provider
            value={{
                // JSAPI State
                mapView,
                updateMapView,
                parcelLayerView,

                //App Data
                selectedParcel,
                updateSelectedParcel,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const appContext = useContext(AppContext);
    if (!appContext) throw new Error(`Cannot use 'useAppContext' outside of a AppContextProvider`);
    return appContext;
};
