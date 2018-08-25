/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  user: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return state.set('loading', true).set('error', false);
    case USER_LOGIN_SUCCESS:
      return state.set('loading', false).set('user', action.user);
    case USER_LOGIN_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
