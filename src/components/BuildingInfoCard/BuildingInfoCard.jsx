// Framework and third-party non-ui
import React from 'react';

// Hooks, context, and constants
import { useTranslation } from 'react-i18next';
import { faHouseBuilding } from '@fortawesome/pro-duotone-svg-icons';

// Component specific modules (Component-styled, etc.)
import { StyledCol, StyledLabel, StyledRow, StyledValue } from './BuildingInfoCard-styled';
import BasicCard from '../BasicCard';

const BuildingInfoCard = ({
    className,
    ...props
}) => {
    const [t] = useTranslation();

    return (
        <BasicCard title={'Building Information'} icon={faHouseBuilding}>
            <StyledRow>
                <StyledCol>
                    <StyledValue>{props.BLD_FRT}</StyledValue>
                    <StyledLabel>Building Frontage</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.TOTAL_UNITS}</StyledValue>
                    <StyledLabel>Total Units</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.COMMERCIAL_SQFT}</StyledValue>
                    <StyledLabel>Commercial Area</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.CONSTRUCTION_TYPE}</StyledValue>
                    <StyledLabel>Construction Type</StyledLabel>
                </StyledCol>
            </StyledRow>
            <StyledRow>
                <StyledCol>
                    <StyledValue>{props.BASEMENT_TYPE}</StyledValue>
                    <StyledLabel>Basements</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.BLD_DEP}</StyledValue>
                    <StyledLabel>Building Depth</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.COMMERCIAL_UNITS}</StyledValue>
                    <StyledLabel>Commercial Units</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.EXTERIOR_CONDITION}</StyledValue>
                    <StyledLabel>Exterior Condition</StyledLabel>
                </StyledCol>
            </StyledRow>
            <StyledRow>
                <StyledCol>
                    <StyledValue>{props.EXTERIOR_WALL}</StyledValue>
                    <StyledLabel>External Wall</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.BLD_STORY}</StyledValue>
                    <StyledLabel>Stories</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.RESIDENTIAL_SQFT}</StyledValue>
                    <StyledLabel>Living Area</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.RESIDENTIAL_UNITS}</StyledValue>
                    <StyledLabel>Residential Units</StyledLabel>
                </StyledCol>
            </StyledRow>
            <StyledRow>
                <StyledCol>
                    <StyledValue>{props.STYLE}</StyledValue>
                    <StyledLabel>Building Style</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.PROXIMITY}</StyledValue>
                    <StyledLabel>Proximity</StyledLabel>
                </StyledCol>
                <StyledCol>
                    <StyledValue>{props.YRBUILT}</StyledValue>
                    <StyledLabel>Year Built</StyledLabel>
                </StyledCol>
            </StyledRow>
        </BasicCard>
    );
};

export default BuildingInfoCard;
