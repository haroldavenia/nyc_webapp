import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Map from '@arcgis/core/Map';

export function loadView(map, options) {
    return loadWebMap(map, options);
}

export function loadWebMap(map, options) {
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

export function destroyView(view) {
    if (!view) return;
    // undocumented way to destroy a view
    view = view.container = null;
}
