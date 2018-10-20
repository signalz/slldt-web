/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Input, Button } from 'antd';

import { loadUser } from 'containers/App/actions';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const LoginButton = styled(Button)`
  background-color: ${props => props.theme.appButton};
`;

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
    };
  }

  onInputUserNameChange = e =>
    this.setState({
      userName: e.target.value,
    });

  onInputPasswordChange = e =>
    this.setState({
      password: e.target.value,
    });

  onLoginButtonClick = () => {
    console.log(this.state.userName, this.state.password);
    console.log(this.props.login);
    this.props.login(this.state.userName, this.state.password);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div>
          User name:
          <Input
            value={this.state.userName}
            onChange={this.onInputUserNameChange}
            placeholder="user name"
          />
        </div>
        <div>
          Password:
          <Input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.onInputPasswordChange}
          />
        </div>
        <div>
          <LoginButton type="primary" onClick={this.onLoginButtonClick}>
            Login
          </LoginButton>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginpage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: (userName, password) => dispatch(loadUser(userName, password)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
