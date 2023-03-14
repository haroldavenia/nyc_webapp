import { getItem } from '@esri/arcgis-rest-portal';

export async function getPortalItem(portalItemId: string, requestOptions: any) {
    try {
        const item = await getItem(portalItemId, requestOptions);
        return item;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
