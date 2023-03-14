// Framework and third-party non-ui
import React from 'react';

// App components

// JSON & Styles
import { SignInContainer, LoginDialog, Content, Logo, LoginButton } from './SignIn-styled';

// Hooks, context, and constants
import { useAccountsContext } from '../../context/AccountsContext';

// Third-party components (buttons, icons, etc.)

// Internationalization
import { useTranslation } from 'react-i18next';

interface IProps {
    signingOut: true
}

const SignIn: React.FC<IProps> = ({ signingOut }) => {
    // ----- Language -----
    const { t } = useTranslation();

    // ----- Context -----
    const { signIn, signOut, errorMessage }: any = useAccountsContext();

    return (
        <SignInContainer>
            <LoginDialog>
                <Content>
                    <Logo src={'/login.png'} alt="App Logo" />
                    <h3>{`${signingOut ? errorMessage || t('SignIn.Error') : t('SignIn.Login')}`}</h3>
                    <LoginButton width="full" onClick={signingOut ? signOut : signIn}>
                        {t(`SignIn.${signingOut ? 'SignOut' : 'SignIn'}`)}
                    </LoginButton>
                </Content>
            </LoginDialog>
        </SignInContainer>
    );
};

export default SignIn;
