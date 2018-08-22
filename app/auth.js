import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

import LoadingIndicator from './components/LoadingIndicator';

const getUserFromState = state => state.toJS().global.user;

const userIsAuthenticatedDefaults = {
  authenticatedSelector: state =>
    Object.keys(getUserFromState(state)).length > 0,
  authenticatingSelector: state =>
    getUserFromState(state) && getUserFromState(state).isLoading,
  wrapperDisplayName: 'UserIsAuthenticated',
};

export const userIsAuthenticated = connectedAuthWrapper(
  userIsAuthenticatedDefaults,
);

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  ...userIsAuthenticatedDefaults,
  AuthenticatingComponent: LoadingIndicator,
  redirectPath: '/login',
});

export const userRedir = role =>
  connectedRouterRedirect({
    redirectPath: '/login',
    allowRedirectBack: false,
    authenticatedSelector: state =>
      Object.keys(getUserFromState(state)).length > 0 &&
      getUserFromState(state).role === role,
    wrapperDisplayName: `UserIs${role}`,
  });

const userIsNotAuthenticatedDefaults = {
  // Want to redirect the user when they are done loading and authenticated
  authenticatedSelector: state =>
    Object.keys(getUserFromState(state)).length === 0,
  wrapperDisplayName: 'UserIsNotAuthenticated',
};

export const userIsNotAuthenticated = connectedAuthWrapper(
  userIsNotAuthenticatedDefaults,
);

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  ...userIsNotAuthenticatedDefaults,
  redirectPath: state => `/${getUserFromState(state).role}`,
  allowRedirectBack: false,
});
