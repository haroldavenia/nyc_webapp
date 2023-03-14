import { useEffect } from 'react';
import { 
    IMapView, 
    IMap,
} from '../models/esri.model';


export function useWatches(obj: IMapView, names: string[], callback: () => void) {
    useEffect(() => {
        if (!obj) {
            return;
        }
        const handles = names.map((name) => obj.watch(name, callback));
        return function removeHandles() {
            handles.forEach((handle) => {
                handle.remove();
            });
        };
    }, [obj, names, callback]);
}

export function useWatch(obj: IMapView, name: string, callback: () => void) {
    useWatches(obj, [name], callback);
}

export function useOnEvents(obj: IMapView, names: string[], callback: () => void) {
    useEffect(() => {
        if (!obj || typeof obj.on !== 'function') {
            return;
        }
        const handles = names.map((name: any) => obj.on(name, callback));
        return function removeHandles() {
            handles.forEach((handle) => {
                handle.remove();
            });
        };
    }, [obj, names, callback]);
}

export function useOnEvent(obj: IMapView, name: string, callback: () => void) {
    useOnEvents(obj, [name], callback);
}
