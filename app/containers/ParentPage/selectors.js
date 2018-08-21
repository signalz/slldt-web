import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the parentPage state domain
 */

const selectParentPageDomain = state => state.get('parentPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ParentPage
 */

const makeSelectParentPage = () =>
  createSelector(selectParentPageDomain, substate => substate.toJS());

export default makeSelectParentPage;
export { selectParentPageDomain };
