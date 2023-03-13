import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import AppConfig from '../constants/AppConfig';

const _updateMapView = async (args, setter) => {
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
        const parcelLayer = mapView.map.layers.find((layer) => {
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

const _updateSelectedParcel = async (args, setter) => {
    const { mapView, parcelLayerView, value, parcelHighightHandle, setParcelHighightHandle } = args;

    if (mapView && parcelLayerView) {
        if (parcelHighightHandle) {
            parcelHighightHandle.remove();
        }
        if (value) {
            const handle = parcelLayerView.highlight(value);
            setParcelHighightHandle(handle);
            mapView.goTo({ target: value.geometry, zoom: AppConfig.searchResultZoom });
        }
    }

    setter(value);
};

export { _updateMapView, _updateSelectedParcel };
