import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import React from 'react';
import AppConfig from '../constants/AppConfig';

interface IArgs {
    mapView: __esri.MapView | null,
    parcelLayerView?: __esri.LayerView | null, 
    parcelFeatureLayerView?: __esri.FeatureLayerView | null, 
    featureSelect?: __esri.Graphic | null | undefined, 
    parcelHighightHandle?: __esri.Handle | null | undefined, 
    setParcelLayerView?: React.Dispatch<React.SetStateAction<__esri.LayerView | null>> ,
    setParcelHighightHandle?: React.Dispatch<React.SetStateAction<__esri.Handle | null>>,

}

type ISetterMapView = React.Dispatch<React.SetStateAction<__esri.MapView | null>>
type ISetterGraphic = React.Dispatch<React.SetStateAction<__esri.Graphic | null | undefined>>

const _updateMapView = async (args: IArgs, setter: ISetterMapView) => {
    // do something with args if needed
    const { mapView, setParcelLayerView } = args;
    if (mapView) {
        let basemapToggle = new BasemapToggle({
            view: mapView,
            nextBasemap: AppConfig.baemap_imagery_id,
            container: document.createElement('div'),
        });

        mapView.ui.move('zoom', 'bottom-right');
        mapView.ui.add(basemapToggle, 'bottom-left');
        const parcelLayer = mapView.map.layers.find((layer:__esri.Layer) => {
            return (
                layer?.portalItem?.id === AppConfig.parcelLayer.itemId && layer.layerId === AppConfig.parcelLayer.index
            );
        });
        if (parcelLayer) {
            mapView.whenLayerView(parcelLayer).then((layerView) => {
                setParcelLayerView(layerView);
            });
        }
    }

    await setter(mapView);
};

const _updateSelectedParcel = async (args: IArgs, setter: ISetterGraphic) => {
    const { mapView, parcelFeatureLayerView, featureSelect, parcelHighightHandle, setParcelHighightHandle } = args;

    if (mapView && parcelFeatureLayerView) {
        if (parcelHighightHandle) {
            parcelHighightHandle.remove();
        }
        if (featureSelect) {
            const handle = parcelFeatureLayerView.highlight(featureSelect);
            setParcelHighightHandle(handle);
            mapView.goTo({ target: featureSelect.geometry, zoom: AppConfig.searchResultZoom });
        }
    }

    setter(featureSelect);
};

export { _updateMapView, _updateSelectedParcel };
