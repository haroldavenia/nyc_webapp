import { getItem } from '@esri/arcgis-rest-portal';

export async function getPortalItem(portalItemId, requestOptions) {
    try {
        const item = await getItem(portalItemId, requestOptions);
        return item;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
