import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Map from '@arcgis/core/Map';

import { IMapView } from '../../models/esri.model';

export function loadView(map: string, options: any) {
    return loadWebMap(map, options);
}

export function loadWebMap(map: string, options: any) {
    const { view } = options;

    // Create web map from map id
    const webmap = map
        ? new WebMap({
              portalItem: {
                  id: map,
              },
          })
        : new Map({ basemap: view.basemap });
    // Return a view with that web map
    return {
        view: new MapView({
            ...view,
            map: webmap,
        }),
        webmap,
    };
}

export function destroyView(view: IMapView) {
    if (!view) return;
    // undocumented way to destroy a view
    view = view.container = null;
}
