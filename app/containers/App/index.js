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
import HomePage from 'containers/HomePage';
import AboutUs from 'containers/AboutUs';
import Header from 'components/Header';

// import Background from './bg.jpg';

const AppWrapper = styled.div`
  /* max-width: calc(768px + 16px * 2); */
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  /* padding: 0 16px; */
  flex-direction: column;
`;

const App = props => (
  <AppWrapper>
    {/* <Img src={Background} alt="test" /> */}
    <Helmet titleTemplate="IQTrivia Homepage" defaultTitle="IQTrivia Homepage">
      <meta name="description" content="IQTrivia Homepage" />
    </Helmet>
    <Header {...props} />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutUs} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    {/* <Footer /> */}
  </AppWrapper>
);

export default App;
