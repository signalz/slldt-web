import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />
          <FormattedMessage {...messages.home} />
        </Menu.Item>
        <Menu.Item key="app" onClick={() => this.props.history.push('/about')}>
          <Icon type="appstore" />
          <FormattedMessage {...messages.about} />
        </Menu.Item>
      </Menu>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object,
};

export default Header;
