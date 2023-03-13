// Framework and third-party non-ui
import React from 'react';

// Hooks, context, and constants
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Component specific modules (Component-styled, etc.)
import { StyledBody, StyledContainer, StyledHeader, StyledTitle } from './BasicCard-styled';

const BasicCard = ({ title, icon, ...props }) => {
    return (
        <StyledContainer>
            {
                title &&
                <StyledHeader>
                    {icon ? <FontAwesomeIcon icon={icon} size="3x" /> : ''}
                    <StyledTitle>{title}</StyledTitle>
                </StyledHeader>
            }
            <StyledBody>{props.children}</StyledBody>
        </StyledContainer>
    );
};

export default BasicCard;
