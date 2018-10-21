import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import { FooterWrapper, SectionsWrapper } from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <FooterWrapper>
      <SectionsWrapper>
        <section>
          <FormattedMessage {...messages.licenseMessage} />
        </section>
        <section>
          <LocaleToggle />
        </section>
        <section>
          <FormattedMessage {...messages.rightMessage} />
        </section>
      </SectionsWrapper>
    </FooterWrapper>
  );
}

export default Footer;
