// Framework and third-party non-ui
import { useTranslation } from 'react-i18next';

import { HeaderStyled, StyledBrandContainer } from './Header-styled';

import logo from '../../images/header_logo.png';
import SignOut from '../SignOut';

const Header = () => {
    const [t] = useTranslation();

    return (
        <HeaderStyled>
            <StyledBrandContainer>
                <img src={logo} alt="Logo" id="logo" />
                <h1>{t('Header.title')}</h1>
            </StyledBrandContainer>
            <SignOut />
        </HeaderStyled>
    );
};

export default Header;
