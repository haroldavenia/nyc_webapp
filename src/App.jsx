import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppContainer, ContentContainer, MapContainer, PanelContainer, SimplePageContainer, StyledTabs, StyledTabNav, StyledTabTitle, StyledTab } from './App-styled';
import Header from './components/Header';
import Map from './components/Map/Map';
import DetailsPanelBBL from './components/panels/DetailsPanelBBL';
import SearchPanel from './components/panels/SearchPanel';
import AppConfig from './constants/AppConfig';
import AppRoutes from './constants/AppRoutes';
import './styles/GlobalStyles';

function App() {
    
    return (
        <AppContainer>
            <SimplePageContainer>
                <Header />
                <ContentContainer>
                    <PanelContainer>
                        <Routes>
                            <Route path={AppRoutes.search.path} element={<SearchPanel />} />
                            <Route path={AppRoutes.parcel.path} element={<DetailsPanelBBL />} />
                        </Routes>
                    </PanelContainer>
                    <div style={{width: "100%", height: "100%"}}>
                        <Map webmapId={AppConfig.webmap} isSelected={true} />
                    </div>
                </ContentContainer>
            </SimplePageContainer>
        </AppContainer>
    );
}

export default App;
