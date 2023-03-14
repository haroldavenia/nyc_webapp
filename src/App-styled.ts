import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab-nav';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/components/calcite-tab';

import styled from 'styled-components';
import { CalciteTabs, CalciteTabTitle, CalciteTabNav, CalciteTab } from '@esri/calcite-components-react';

export const StyledTabs  = styled(CalciteTabs)`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const StyledTabTitle  = styled(CalciteTabTitle)``;
export const StyledTabNav  = styled(CalciteTabNav)``;
export const StyledTab  = styled(CalciteTab)``;

// mobile issues using 100vh & 100vw
export const AppContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
`;

export const SimplePageContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ContentContainer = styled.div`
    height: calc(100% - var(--header-height));
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`;

export const PanelContainer = styled.div`
    width: var(--sidebar-width);
    padding: 0;
    background: var(--ui-background-dark);
    overflow-y: auto;
    border-right: 1px solid lightGray;

    @media screen and (max-width: 640px) {
        height: var(--sidebar-height);
        width: auto;
        order: 1;
    }
`;

export const MapContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
`;
