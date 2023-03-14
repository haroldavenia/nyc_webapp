// Framework and third-party non-ui
import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import esriConfig from '@arcgis/core/config';
import IdentityManager from '@arcgis/core/identity/IdentityManager';

import useAccountManager from '../hooks/useAccountManager';

import { getPortalItem } from '../services/arcgis';
import AppConfig from '../constants/AppConfig';

import { IAccountState } from '../models/app.model';

export const AccountsContext = createContext<IAccountState>({});

export const AccountsContextProvider = ({ children }: any) => {
    const [userAccessVerified, setUserAccessVerified] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const { auth } = AppConfig;

    esriConfig.portalUrl = auth.portalUrl;
    const sharingUrl = auth.portalUrl + '/sharing';

    const options = {
        clientId: auth.appId,
        popup: auth.popup,
        portalUrl: sharingUrl,
        params: { force_login: true },
        redirectUri: `${window.location.origin}${window.location.pathname}`,
    };

    const { accountManagerState, addAccount, logoutAccount, verifyToken } = useAccountManager(options);
    const { active, accounts } = accountManagerState;

    const signIn = async () => {
        addAccount();
    };

    const signOut = async () => {
        logoutAccount(accounts[active]);
        setUserAccessVerified(false);
    };

    const getAccountSessionStatus = useCallback(async () => {
        const account = accounts[active];
        if (account?.key && account?.session) {
            const session = account?.session;

            const tokenExpires = session?.tokenExpires;
            const dateTime = new Date();

            const check = account?.key && (await verifyToken(account));
            const status = tokenExpires && tokenExpires > dateTime;

            return check && status;
        }
    }, [verifyToken, accounts, active]);

    // Verify user has access to appItemId
    const verifyAccess = useCallback(
        async (account: any) => {
            try {
                const data = await getPortalItem(auth.appItemId, {
                    authentication: account?.session,
                    portal: sharingUrl,
                });
                if (data) {
                    IdentityManager.registerToken({
                        token: account.token,
                        server: sharingUrl + '/rest',
                        ssl: account.session.ssl,
                        userId: account.user.id,
                        expires: account.session.tokenExpires,
                    });
                    setUserAccessVerified(true);
                    setErrorMessage(null);
                }
            } catch (err: any) {
                setUserAccessVerified(false);
                setErrorMessage(err.message);
            }
        },
        [auth.appItemId, sharingUrl]
    );

    // Verify access each time the account changes
    useEffect(() => {
        const account = accounts[active];
        if (account && account?.session) {
            verifyAccess(account);
        }
    }, [accounts, active, verifyAccess]);

    const getOriginRoute = useCallback(() => {
        const { originRoute } = accountManagerState?.status || {};
        try {
            const path = new URL(originRoute).pathname;
            return path;
        } catch (e) {
            console.error(`Error retrieving originPath. ${e}`);
            return undefined;
        }
    }, [accountManagerState.status]);

    return (
        <AccountsContext.Provider
            value={{
                signIn,
                signOut,
                getAccountSessionStatus,
                getOriginRoute,
                userAccessVerified,
                errorMessage,
                account: accounts && accounts[active],
                orgUrlKey: accounts && accounts[active] ? accounts[active]?.portal.urlKey : null,
                orgId: accounts && accounts[active] ? accounts[active]?.portal?.subscriptionInfo?.id : null,
            }}
        >
            {children}
        </AccountsContext.Provider>
    );
};

export const useAccountsContext = () => {
    const accountsContext = useContext(AccountsContext);
    if (!accountsContext) throw new Error(`Cannot use 'useAccountsContext' outside of a AccountsContextProvider`);
    return accountsContext;
};
