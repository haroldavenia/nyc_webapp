// Framework and third-party non-ui
import React from 'react';

// Hooks, context, and constants

// Component specific modules (Component-styled, etc.)
import {
    StyledBody,
    StyledBtnText,
    StyledButton,
    StyledContainer,
    StyledIcon,
    StyledTitle,
    StyledHeader,
} from './Panel-styled';

const Panel = ({ className, title = 'Sample Title', backText = 'Go Back', onBackClick, ...props }) => {
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledTitle>{title}</StyledTitle>
                {onBackClick ? (
                    <StyledButton onClick={onBackClick}>
                        <StyledIcon icon="chevron-left" scale="s" />
                        <StyledBtnText>{backText}</StyledBtnText>
                    </StyledButton>
                ) : (
                    ''
                )}
            </StyledHeader>
            <StyledBody>{props.children}</StyledBody>
        </StyledContainer>
    );
};

export default Panel;
