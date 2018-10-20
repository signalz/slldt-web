/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import 'antd/dist/antd.css';

import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';
import TeacherPage from 'containers/TeacherPage/Loadable';
import ParentPage from 'containers/ParentPage/Loadable';
import lightTheme from 'themes/light.json';
import darkTheme from 'themes/dark.json';

import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
  userRedir,
} from 'auth';

import { makeSelectTheme } from './selectors';

const Login = userIsNotAuthenticatedRedir(LoginPage);
const Admin = userIsAuthenticatedRedir(userRedir('Admin')(AdminPage));
const Teacher = userIsAuthenticatedRedir(userRedir('Teacher')(TeacherPage));
const Parent = userIsAuthenticatedRedir(userRedir('Parent')(ParentPage));

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const getTheme = theme => {
  switch (theme) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};

const App = props => (
  <ThemeProvider theme={getTheme(props.theme)}>
    <AppWrapper>
      <Helmet
        titleTemplate="Sổ Liên lạc Điện Tử"
        defaultTitle="Sổ Liên lạc Điện Tử"
      >
        <meta name="description" content="Sổ Liên lạc Điện Tử" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/teacher" component={Teacher} />
        <Route path="/parent" component={Parent} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  </ThemeProvider>
);

App.propTypes = {
  theme: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  theme: makeSelectTheme(),
});

const withConnect = connect(mapStateToProps);

// export default App;
export default compose(withConnect)(App);
