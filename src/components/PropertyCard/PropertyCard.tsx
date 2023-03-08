// Framework and third-party non-ui
import React from 'react';

// Hooks, context, and constants
import { useTranslation } from 'react-i18next';

// Component specific modules (Component-styled, etc.)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowTrendUp,
    faFileInvoiceDollar,
    faHouseBlank,
    faPeople,
    faPrint,
    faShieldCheck,
} from '@fortawesome/pro-duotone-svg-icons';
import { faDiamondTurnRight, faShareNodes } from '@fortawesome/pro-regular-svg-icons';

import {
    StyledAction,
    StyledActionLabel,
    StyledActionsContainer,
    StyledAddress,
    StyledAddressContainer,
    StyledBoroughInfo,
    StyledCol,
    StyledContainer,
    StyledIconContainer,
    StyledIconSection,
    StyledInfo,
    StyledInfoIconLabel,
    StyledLink,
    StyledPropertyInfoContainer,
    StyledRow,
    StyledStreet,
    StyledValue,
    StyledValueSection,
} from './PropertyCard-styled';

interface IProps {
    street: string,
    borough: string,
    block: string,
    lot: string,
    bbl: string,
    ownerName1: string,
    ownerName2?: string,
    taxClass: string,
    type: string
}


const PropertyCard: React.FC<IProps> =({
    street,
    borough,
    block,
    lot,
    bbl,
    ownerName1,
    ownerName2,
    taxClass,
    type
}) => {
    const [t] = useTranslation();

    return (
        <StyledContainer>
            <StyledAddressContainer>
                <StyledStreet>{street}</StyledStreet>
                {/*<StyledAddress>{address}</StyledAddress>*/}
            </StyledAddressContainer>
            <StyledBoroughInfo>
                <StyledInfo>Borough: {borough}</StyledInfo>
                <StyledInfo>Block: {block}</StyledInfo>
                <StyledInfo>lot: {lot}</StyledInfo>
                <StyledInfo>BBL: {bbl}</StyledInfo>
            </StyledBoroughInfo>
            <StyledActionsContainer>
                <StyledAction>
                    <StyledIconContainer>
                        <FontAwesomeIcon icon={faDiamondTurnRight} size="1x" />
                    </StyledIconContainer>
                    <StyledActionLabel>directions</StyledActionLabel>
                </StyledAction>
                <StyledAction>
                    <StyledIconContainer>
                        <FontAwesomeIcon icon={faShareNodes} size="1x" />
                    </StyledIconContainer>
                    <StyledActionLabel>share</StyledActionLabel>
                </StyledAction>
                <StyledAction>
                    <StyledIconContainer>
                        <FontAwesomeIcon icon={faPrint} size="1x" />
                    </StyledIconContainer>
                    <StyledActionLabel>print</StyledActionLabel>
                </StyledAction>
                <StyledAction>
                    <StyledIconContainer>
                        <FontAwesomeIcon icon={faShieldCheck} size="1x" />
                    </StyledIconContainer>
                    <StyledActionLabel>certificate</StyledActionLabel>
                </StyledAction>
            </StyledActionsContainer>
            <StyledPropertyInfoContainer>
                <StyledRow>
                    <StyledCol>
                        <StyledIconSection>
                            <FontAwesomeIcon icon={faPeople} size="3x" />
                            <StyledInfoIconLabel>Owner</StyledInfoIconLabel>
                        </StyledIconSection>
                        <StyledValueSection>
                            <StyledValue bold>{ownerName1}</StyledValue>
                            <StyledValue>{ownerName2}</StyledValue>
                        </StyledValueSection>
                    </StyledCol>
                    <StyledCol>
                        <StyledIconSection>
                            <FontAwesomeIcon icon={faHouseBlank} size="3x" />
                            <StyledInfoIconLabel>Type</StyledInfoIconLabel>
                        </StyledIconSection>
                        <StyledValueSection>
                            <StyledValue bold>{type}</StyledValue>
                        </StyledValueSection>
                    </StyledCol>
                </StyledRow>
                <StyledRow>
                    <StyledCol>
                        <StyledIconSection>
                            <FontAwesomeIcon icon={faFileInvoiceDollar} size="3x" />
                            <StyledInfoIconLabel>Tax class</StyledInfoIconLabel>
                        </StyledIconSection>
                        <StyledValueSection>
                            <StyledValue bold>{taxClass}</StyledValue>
                        </StyledValueSection>
                    </StyledCol>
                </StyledRow>
            </StyledPropertyInfoContainer>
        </StyledContainer>
    );
};

export default PropertyCard;
