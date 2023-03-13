import styled from 'styled-components';
import '@esri/calcite-components/dist/components/calcite-card';
import { CalciteCard } from '@esri/calcite-components-react';
import Panel from '../../components/Panel/Panel';
import PropertyCard from '../../components/PropertyCard';
import BuildingInfoCard from '../../components/BuildingInfoCard';

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

export const SearchCard = styled(CalciteCard)`
    width: 100%;
    padding: 10px 0 10px 0;
`;

export const StyledBuildingInfoCard = styled(BuildingInfoCard)``;

export const StyledPanel = styled(Panel)``;

export const StyledPropertyCard = styled(PropertyCard)``;

export const StyledLink = styled.a`
    color: #1771b7;
    cursor: pointer;
    text-decoration: underline;
`;

export const StyledLinksContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: 13px;
    justify-content: center;
    width: 100%;
`;

export const StyledJumpTo = styled.p``;
