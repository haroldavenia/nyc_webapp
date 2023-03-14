import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import React from 'react';
import AppConfig from '../constants/AppConfig';

import { 
    IMapView,
    IGraphic,
    ILayer,
    ILayerView,
    IFeatureLayerView,
    IHandle,
} from '../models/esri.model';

interface IArgs {
    mapView: IMapView,
    parcelLayerView?: ILayerView, 
    parcelFeatureLayerView?: IFeatureLayerView, 
    featureSelect?: IGraphic, 
    parcelHighightHandle?: IHandle, 
    setParcelLayerView?: React.Dispatch<React.SetStateAction<IFeatureLayerView>> ,
    setParcelHighightHandle?: React.Dispatch<React.SetStateAction<IHandle>>,
}

type ISetterMapView = React.Dispatch<React.SetStateAction<IMapView>>
type ISetterGraphic = React.Dispatch<React.SetStateAction<IGraphic>>

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
        const parcelLayer = mapView.map.layers.find((layer: any) => { // TODO: Layer types definition
            return (
                layer?.portalItem?.id === AppConfig.parcelLayer.itemId && layer.layerId === AppConfig.parcelLayer.index
            );
        });
        if (parcelLayer) {
            mapView.whenLayerView(parcelLayer).then((layerView: any) => {
                if(!setParcelLayerView) return;
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
            if(setParcelHighightHandle) setParcelHighightHandle(handle);
            mapView.goTo({ target: featureSelect.geometry, zoom: AppConfig.searchResultZoom });
        }
    }

    setter(featureSelect);
};

export { _updateMapView, _updateSelectedParcel };
