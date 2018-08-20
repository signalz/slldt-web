/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import {
  userIsAuthenticatedRedir,
  // userIsNotAuthenticatedRedir,
  // userIsAdminRedir,
  // userIsAuthenticated,
  // userIsNotAuthenticated,
} from 'auth';

// import { makeSelectCurrentUser } from './selectors';

// const Login = userIsNotAuthenticatedRedir(LoginPage);
const Protected = userIsAuthenticatedRedir(HomePage);
// const Admin = userIsAuthenticatedRedir(userIsAdminRedir(FeaturePage));

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = () => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={Protected} />
      <Route path="/features" component={FeaturePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </AppWrapper>
);

// const mapStateToProps = createStructuredSelector({
//   user: makeSelectCurrentUser(),
// });

// export default connect(mapStateToProps)(App);
export default App;
