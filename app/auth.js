// import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

import LoadingIndicator from './components/LoadingIndicator';

const getUserFromState = state => state.toJS().global.user;

// const locationHelper = locationHelperBuilder({});

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
    // predicate: user => user[`is${role}`],
    wrapperDisplayName: `UserIs${role}`,
  });

// export const userIsTeacherRedir = connectedRouterRedirect({
//   redirectPath: '/',
//   allowRedirectBack: false,
//   authenticatedSelector: state => state.user !== null && state.user.isTeacher,
//   predicate: user => user.isTeacher,
//   wrapperDisplayName: 'UserIsTeacher',
// });

// export const userIsParentRedir = connectedRouterRedirect({
//   redirectPath: '/',
//   allowRedirectBack: false,
//   authenticatedSelector: state => state.user !== null && state.user.isParent,
//   predicate: user => user.isParent,
//   wrapperDisplayName: 'UserIsParent',
// });

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
  // redirectPath: (state, ownProps) =>
  //   locationHelper.getRedirectQueryParam(ownProps) || '/',
  redirectPath: state => `/${getUserFromState(state).role}`,
  allowRedirectBack: false,
});
