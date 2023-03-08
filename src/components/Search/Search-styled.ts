import React from 'react';
import styled from 'styled-components';
import type {RefObject} from 'react';

type ControlProp = {
    searchRef: RefObject<HTMLElement | null>
}

export const SearchStyled = styled.div<ControlProp>`
    width: 100%;
    box-sizing: border-box;
`;
