import { UserSession } from '@esri/arcgis-rest-auth';

export const getAccountManagerStorage = (manager: string = '') => {
  const { accounts, active, status, order } = getLocalSerialized(manager) || {};
  const dAccounts = deserializeUserAuthObjects(accounts);

  const authObject = {
    accounts: dAccounts,
    active,
    status,
    order
  };
  return authObject;
};

export const addAccountStorage = (manager: string = '', account: { user?: any; portal?: string; session?: any; token?: any; key: any; }) => {
  const previous = getLocalSerialized(manager);
  const {
    accounts,
    active,
    status: { setActive }
  } = previous || {};
  const updateActive = setActive || !active ? account.key : active;
  const order = previous.order
    ? previous.order.find((id: any) => id === account.key)
      ? [...previous.order]
      : [account.key, ...previous.order]
    : [account.key];
  setLocal({
    state: {
      ...previous,
      accounts: { ...accounts, [account.key]: account },
      active: updateActive,
      order
    },
    manager
  });
};

export const removeAccountStorage = (manager: string = '', { key }: any) => {
  const previous = getLocalSerialized(manager);
  const order = previous.order.filter((item: any) => item !== key);
  delete previous.accounts[key];

  const active =
    previous.active === key
      ? order.length > 0
        ? order[0]
        : undefined
      : previous.active;

  setLocal({
    state: {
      ...previous,
      active,
      order
    },
    manager
  });
};

export const switchActiveStorage = (manager: string = '', { key }: any) => {
  const previous = getLocalSerialized(manager);
  const orders = previous.order ? previous.order : [];
  const order = [key, ...orders.filter((item: any) => item !== key)];
  setLocal({
    state: {
      ...previous,
      active: key,
      order
    },
    manager
  });
};

export const completeStatusStorage = (manager: string = '') => {
  const previous = getLocalSerialized(manager);
  const { status } = previous || {};
  setLocal({
    state: {
      ...previous,
      status: { ...status, loading: false }
    },
    manager
  });
};

export const beginStatusStorage = (
  manager: string = '',
  { clientId, redirectUri, portalUrl, popup }: { clientId: any; redirectUri: any; portalUrl: string; popup: any; },
  originRoute: string,
  setActive: boolean | undefined
) => {
  const previous = getLocalSerialized(manager);

  setLocal({
    state: {
      ...previous,
      status: {
        loading: true,
        authProps: { clientId, redirectUri, portalUrl, popup },
        originRoute,
        setActive
      }
    },
    manager
  });
};

export const logoutAccountStorage = (manager: string = '', { key }: any) => {
  const previous = getLocalSerialized(manager);
  const { accounts } = previous || {};

  const user = {
    ...accounts[key],
    token: null,
    session: null
  };

  setLocal({
    state: {
      ...previous,
      accounts: { ...accounts, [key]: user }
    },
    manager
  });
};

export const refreshAccountStorage = (manager: string = '', { key, session }: { key: any; session: any; }) => {
  const previous = getLocalSerialized(manager);
  const { accounts } = previous || {};
  setLocal({
    state: {
      ...previous,
      accounts: { ...accounts, [key]: { ...accounts[key], session } }
    },
    manager
  });
};

//** State Management */

const setLocal = ({ state, manager }: any) => {
  window.localStorage.setItem(manager, JSON.stringify(state));
};

const getLocalSerialized = (manager: string = '') => {
  const keyData: string | null = window.localStorage.getItem(manager)
  const accountManager = keyData ? JSON.parse(keyData) : null;

  const { accounts, active, status, order } = accountManager || {};
  const authObject = {
    accounts,
    active,
    status,
    order
  };
  return authObject;
};

const deserializeUserAuthObjects = (accounts: any) => {
  const dUsers: any = {};

  if (accounts) {
    for (const [key] of Object.entries(accounts)) {
      const deserializedSession = accounts[key].session
        ? UserSession.deserialize(accounts[key].session)
        : undefined;
      const deserializedPortal = accounts[key].portal
        ? JSON.parse(accounts[key].portal)
        : undefined;

      dUsers[key] = {
        ...accounts[key],
        portal: deserializedPortal,
        session: deserializedSession
      };
    }
  }

  return dUsers;
};
