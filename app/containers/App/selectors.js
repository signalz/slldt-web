/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const makeSelectTheme = () =>
  createSelector(selectGlobal, globalState => globalState.get('theme'));

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectTheme,
};
