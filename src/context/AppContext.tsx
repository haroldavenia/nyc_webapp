// Framework and third-party non-ui
import Feature from 'esri/widgets/Feature';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { _updateMapView, _updateSelectedParcel } from './MapController';

import { IAppState } from '../models/app.model';
import {
    IMapView,
    IGraphic,
    ILayerView,
    IHandle,
    IFeatureLayerView,
} from '../models/esri.model'

export const AppContext = createContext<IAppState>({});

export const AppContextProvider: React.FC<{children :React.ReactNode}>= ({ children }) => {
    // App Framework
    const [selectedParcel, setSelectedParcel] = useState<IGraphic>();

    // ----- JSAPI State -----
    const [mapView, setMapView] = useState<IMapView>();
    const [parcelLayerView, setParcelLayerView] = useState<IFeatureLayerView>();
    const [parcelHighightHandle, setParcelHighightHandle] = useState<IHandle>();

    // Setters
    const updateMapView = async (mapView: IMapView) => {
        // Add mapView to context
        await _updateMapView({ mapView, setParcelLayerView }, setMapView);
    };

    const updateSelectedParcel = async (featureSelect:IGraphic) => {
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
