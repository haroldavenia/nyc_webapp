import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import esriConfig from '@arcgis/core/config';
import { setAssetPath } from '@esri/calcite-components/dist/components';
import { AccountsContextProvider } from './context/AccountsContext';
import { AppContextProvider } from './context/AppContext';
import AppSecured from './AppSecured';
import GlobalStyles from './styles/GlobalStyles';
import './index.css';
import './utilities/i18n';
import AppConfig from './constants/AppConfig';

// esriConfig.apiKey = AppConfig.arcgis_api_key;
esriConfig.portalUrl = AppConfig.auth.portalUrl;
setAssetPath('https://unpkg.com/@esri/calcite-components/dist/calcite/assets');
const root = document.getElementById('root') as Element;
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <AccountsContextProvider>
            <BrowserRouter>
                <AppContextProvider>
                    <GlobalStyles />
                    <AppSecured />
                </AppContextProvider>
            </BrowserRouter>
        </AccountsContextProvider>
    </React.StrictMode>
);
