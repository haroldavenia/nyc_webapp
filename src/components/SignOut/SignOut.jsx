// Framework and third-party non-ui
import { useTranslation } from 'react-i18next';
import { useAccountsContext } from '../../context/AccountsContext';
import { StyledButton } from './SignOut-styled';

const SignOut = () => {
    const [t] = useTranslation();
    const { signOut } = useAccountsContext();

    return (
        <StyledButton
            iconStart="sign-out"
            onClick={() => {
                signOut();
            }}
        >
            {t('SignIn.SignOut')}
        </StyledButton>
    );
};

export default SignOut;
