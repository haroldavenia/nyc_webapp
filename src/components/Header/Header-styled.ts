import styled from 'styled-components';

export const HeaderStyled = styled.div`
    width: 100%;
    box-sizing: border-box;

    height: var(--header-height);
    display: flex;
    align-items: center;
    padding: 1em;

    background-color: #0a5796;
`;

export const StyledBrandContainer = styled.div`
    box-sizing: border-box;

    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    h1 {
        color: #ffffff;
        font-size: 36;
    }

    a {
        padding: 0.5rem;
        margin: -0.5rem;
        vertical-align: middle;
    }

    img {
        height: var(--title-size);
        vertical-align: inherit;
    }
`;
