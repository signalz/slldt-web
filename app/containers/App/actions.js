/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from './constants';

export function loadUser(username, password) {
  return {
    type: USER_LOGIN,
    username,
    password,
  };
}

export function userLoaded(user) {
  return {
    type: USER_LOGIN_SUCCESS,
    user,
  };
}

export function userLoadingError(error) {
  return {
    type: USER_LOGIN_ERROR,
    error,
  };
}
