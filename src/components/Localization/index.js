import React from "react";
import { IntlProvider } from "react-intl";
import { getCurrentLocale, getLocaleData, locales } from '../../locales/utils'

const Localization = ({ children }) => {
  const currentLocale = getCurrentLocale()

  return (
    <IntlProvider
      locale={currentLocale}
      messages={getLocaleData(currentLocale, locales).messages}
    >
      {children}
    </IntlProvider>
  );
};

export default Localization;
