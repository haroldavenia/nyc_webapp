// Framework and third-party non-ui
import Feature from 'esri/widgets/Feature';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { _updateMapView, _updateSelectedParcel } from './MapController';

export const AppContext = createContext({});

export const AppContextProvider: React.FC<{children :React.ReactNode}>= ({ children }) => {
    // App Framework
    const [selectedParcel, setSelectedParcel] = useState<__esri.Graphic | null | undefined>(null);

    // ----- JSAPI State -----
    const [mapView, setMapView] = useState<__esri.MapView | null>(null);
    const [parcelLayerView, setParcelLayerView] = useState<__esri.LayerView | null>(null);
    const [parcelHighightHandle, setParcelHighightHandle] = useState<__esri.Handle | null>(null);

    // Setters
    const updateMapView = async (mapView: __esri.MapView) => {
        // Add mapView to context
        await _updateMapView({ mapView, setParcelLayerView }, setMapView);
    };

    const updateSelectedParcel = async (featureSelect:__esri.Graphic | null ) => {
        await _updateSelectedParcel(
            { mapView, parcelLayerView, featureSelect, parcelHighightHandle, setParcelHighightHandle },
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
