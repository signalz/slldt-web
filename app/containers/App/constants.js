/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// export const LOAD_REPOS = 'iqtrivia/App/LOAD_REPOS';
// export const LOAD_REPOS_SUCCESS = 'iqtrivia/App/LOAD_REPOS_SUCCESS';
// export const LOAD_REPOS_ERROR = 'iqtrivia/App/LOAD_REPOS_ERROR';

export const USER_LOGIN = 'iqtrivia/App/USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'iqtrivia/App/USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'iqtrivia/App/USER_LOGIN_ERROR';
