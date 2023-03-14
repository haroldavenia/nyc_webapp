// Framework and third-party non-ui
import React, { useEffect, useState } from 'react';
import { IFeatureSet } from "@esri/arcgis-rest-types";
// Hooks, context, and constants
import AppRoutes from '../../../constants/AppRoutes';
import { useAppContext } from '../../../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

import { IFeatureLayerView, ILayer, ILayerView, IFeatureLayer } from '../../../models/esri.model';

// Component specific modules (Component-styled, etc.)
import Panel from '../../Panel';

import {
    StyledBuildingInfoCard,
    StyledJumpTo,
    StyledLink,
    StyledLinksContainer,
    StyledPropertyCard,
} from './DetailsPanelBBL-styled';

import AppConfig from '../../../constants/AppConfig';

interface attr_features {
    attributes: {
        [key: string]: any
    }
}

const DetailsPanelBBL = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { selectedParcel, updateSelectedParcel, parcelLayerView, mapView } = useAppContext();
    const [moreData, setMoreData] = useState<attr_features | any>();
    const hanldeBackClick = () => {
        updateSelectedParcel?.(undefined);
        navigate(AppRoutes.search.path);
    };
    useEffect(() => {
        if (!selectedParcel) {
            if (!params.bbl || !parcelLayerView) {
                navigate(AppRoutes.search.path);
                return;
            }

            console.log(parcelLayerView);
            if (parcelLayerView) {
                parcelLayerView.layer
                    .queryFeatures({
                        where: `BBL = '${params.bbl}'`,
                        outFields: ['*'],
                        returnGeometry: true,
                    })
                    .then((results:any) => {
                        if (results?.features?.length) {
                            updateSelectedParcel?.(results.features[0]);
                        }
                    });
            }

            parcelLayerView.layer.queryFeatures({
                where: `BBL = '${params.bbl}'`,
                outFields: ['*'],
                returnGeometry: true,
            })
            .then((results: any) => {
                if (results?.features?.length) {
                    updateSelectedParcel?.(results.features[0]);
                }
            });
        }

        if(mapView){
            const moreDetailsLayer: any = mapView.map.tables.find((layer: any) => {
                return (
                    layer?.portalItem?.id === AppConfig.detailsLayers.itemId && layer.id === AppConfig.detailsLayers.id
                );
            });

            moreDetailsLayer.queryFeatures({
                where: `PARID = '${params.bbl}'`,
                outFields: ['*'],
                returnGeometry: false,
            })
            .then((results:IFeatureSet) => {
                if (results?.features?.length) {                    
                    setMoreData(results.features[0].attributes);
                }
            });
        }

    }, [navigate, params, parcelLayerView, selectedParcel, updateSelectedParcel]);

    return (
        <Panel title="Property Details" backText="Find Another Property" onBackClick={hanldeBackClick}>
            <StyledPropertyCard
                {...{
                    street: `${moreData?.HOUSENUM} ${moreData?.STREET_NAME} ${moreData?.UNITNO} ${moreData?.CITYNAME} ${moreData?.ZIP_CODE}`,
                    address: 'BROOKLYN, NY 11224',
                    borough: selectedParcel?.attributes.BORO,
                    block: selectedParcel?.attributes.BLOCK,
                    lot: selectedParcel?.attributes.LOT,
                    bbl: selectedParcel?.attributes.BBL,
                    ownerName1: moreData?.OWNER,
                    type: moreData?.BLDG_CLASS,
                    taxClass: moreData?.TAX_CLASS,
                }}
            />
            <StyledLinksContainer>
                <StyledJumpTo>
                    Jump to: <StyledLink>Building</StyledLink> | <StyledLink>Land</StyledLink> |{' '}
                    <StyledLink>Tax</StyledLink> | <StyledLink>Valuation</StyledLink> | <StyledLink>Permits</StyledLink>{' '}
                    | <StyledLink>Sales</StyledLink> | <StyledLink>Liens</StyledLink> |{' '}
                    <StyledLink>Neighborhood</StyledLink>
                </StyledJumpTo>
            </StyledLinksContainer>
            <StyledBuildingInfoCard {...moreData}/>
        </Panel>
    );
};

export default DetailsPanelBBL;
