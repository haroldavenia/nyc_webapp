// Framework and third-party non-ui
import React from 'react';
// Hooks, context, and constants
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
// Component specific modules (Component-styled, etc.)
import { StyledBody, StyledContainer, StyledHeader, StyledTitle } from './BasicCard-styled';
import { faMarsDouble } from '@fortawesome/pro-duotone-svg-icons';


interface IProps {
    title?: string
    icon?: IconDefinition 
    children: React.ReactNode
}

const BasicCard : React.FC<IProps> = ({title="", icon , children}) => {
    return (
        <StyledContainer>
            {
                title &&
                <StyledHeader>
                    {icon ? <FontAwesomeIcon icon={icon} size="3x" /> : ''}
                    <StyledTitle>{title}</StyledTitle>
                </StyledHeader>
            }
            <StyledBody>{children}</StyledBody>
        </StyledContainer>
    );
};


export default BasicCard;
