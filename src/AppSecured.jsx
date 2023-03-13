import React from 'react';

// Hooks, context, and constants
import { useAccountsContext } from './context/AccountsContext';
import App from './App';

// App components
import SignIn from './components/SignIn';

// Third-party components (buttons, icons, etc.)

// Component specific modules (Component-styled, etc.)

function AppSecured() {
    // ----- Context -----
    const { account, getAccountSessionStatus, signOut, userAccessVerified } = useAccountsContext();

    // ----- Authenticate -----
    const authenticated = account?.token && getAccountSessionStatus(account);

    // ----- Render -----
    if (authenticated && userAccessVerified) {
        return <App />;
    } else if (authenticated && userAccessVerified === false) {
        signOut();
        return;
    } else if (!authenticated) {
        return <SignIn />;
    } else {
        return null;
    }
}

export default AppSecured;
