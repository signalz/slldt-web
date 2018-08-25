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
import 'antd/dist/antd.css';

import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';
import TeacherPage from 'containers/TeacherPage/Loadable';
import ParentPage from 'containers/ParentPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
  userRedir,
} from 'auth';

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
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/teacher" component={Teacher} />
      <Route path="/parent" component={Parent} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </AppWrapper>
);

export default App;
