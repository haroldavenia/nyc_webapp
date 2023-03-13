import '@esri/calcite-components/dist/components/calcite-icon';
import { CalciteIcon } from '@esri/calcite-components-react';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1px solid lightGray;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const StyledBody = styled.div`
    flex-grow: 1;
    padding: 12px;
`;

export const StyledButton = styled.button`
    align-items: center;
    background-color: white;
    border: 1px solid lightGray;
    cursor: pointer;
    display: flex;
    padding: 8px 15px;
`;

export const StyledBtnText = styled.span`
    color: #0a5796;
`;

export const StyledHeader = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 12px 10px;
`;

export const StyledIcon = styled(CalciteIcon)`
    margin: 0 12px 0 0;
`;

export const StyledTitle = styled.h3`
    font-weight: normal;
    margin: 0 0 0 15px;
    padding: 0;
`;
