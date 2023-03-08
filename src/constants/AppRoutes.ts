const AppRoutes = {
    root: { path: '/', name: 'root', id: 'root' },
    search: {
        path: '/search',
        id: 'search',
    },
    parcels: {
        path: '/parcels',
        id: 'parcels',
    },
    parcel: {
        path: '/parcels/:bbl',
        id: 'parcel',
    },
};

export default AppRoutes;
