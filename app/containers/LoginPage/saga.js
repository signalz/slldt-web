// import { call, put, select, takeLatest } from 'redux-saga/effects';
import { takeLatest, put } from 'redux-saga/effects';
import { USER_LOGIN } from 'containers/App/constants';
// import { userLoaded, userLoadingError } from 'containers/App/actions';
import { userLoaded } from 'containers/App/actions';

// import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getuser({ username, password }) {
  console.log('hitttt');
  console.log(username, password);
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  if (username === 'admin') {
    yield put(userLoaded({ role: 'Admin' }));
  } else if (username === 'parent') {
    yield put(userLoaded({ role: 'Parent' }));
  } else if (username === 'teacher') {
    yield put(userLoaded({ role: 'Teacher' }));
  }

  // try {
  //   // Call our request helper (see 'utils/request')
  //   const repos = yield call(request, requestURL);
  //   yield put(reposLoaded(repos, username));
  // } catch (err) {
  //   yield put(repoLoadingError(err));
  // }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getUserData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(USER_LOGIN, getuser);
}
