// Framework and third-party non-ui
import React, { useEffect } from 'react';

// Hooks, context, and constants
import ArcGIS from '../../constants/ArcGIS';
import { useAppContext } from '../../context/AppContext.tsx';
import { useWebMap } from '../../hooks/useWebMap';
import { useWatch } from '../../hooks/useWatch';

// App components

// Third-party components (buttons, icons, etc.)

// Component specific modules (Component-styled, etc.)
import { StyledMap } from './Map-styled';

interface IProps {
    webmapId: string
    isSelected: boolean 
}

const Map : React.FC<IProps> = ({ webmapId, isSelected }) => {
    // Get values from context
    const { mapView, updateMapView } = useAppContext();

    const viewOptions = {
        view: ArcGIS.mapView,
    };

    useEffect(()=> {
        if(isSelected){
            updateMapView(view, webmap);
        }
    }, [isSelected])

    // Get values from context
    // Use hooks to establish webmap
    const [ref, view, webmap] = useWebMap(webmapId, viewOptions);

    const handleMapReady = async () => {
        try {
            // Initialize map view
            // Update context
            updateMapView(view, webmap);
        } catch (err) {
            console.error(err);
        }
    };

    // Watch for When view is ready, init map when ready
    useWatch(view, 'ready', handleMapReady);

    // return <StyledMap />;
    return <StyledMap ref={ref} isLoaded={mapView} />;
};

export default Map;
