import styled from 'styled-components';

interface IProps {
    isLoaded():void
}
export const StyledMap = styled.div<IProps>`
    width: 100%;
    height: 100%;
    background: var(--ui-background-dark);
`;
