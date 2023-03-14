import styled from 'styled-components';

import splashImage from '../../images/splashBackground.jpg';

import '@esri/calcite-components/dist/components/calcite-card';
import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteCard } from '@esri/calcite-components-react';
import { CalciteButton } from '@esri/calcite-components-react';

export const SignInContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: url(${splashImage}) center/cover no-repeat;
`;

export const LoginDialog = styled(CalciteCard)`
    margin: auto;
    width: 350px;
`;

export const Content = styled.div`
    text-align: center;
    padding: 0.5rem;
    background: #252931;
`;

export const Logo = styled.img`
    width: 177px;
`;

export const LoginButton = styled(CalciteButton)`
    margin-top: 1rem;
`;
