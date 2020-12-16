import { createIntl, createIntlCache } from "react-intl";

const messages = {
  'test.locale': 'RU'
};

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: "ru",
    messages,
  },
  cache
);

export default intl;