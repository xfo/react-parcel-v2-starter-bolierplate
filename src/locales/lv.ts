import { createIntl, createIntlCache } from "react-intl";
const messages = {
  'test.locale': 'LV'
};

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: "lv",
    messages,
  },
  cache
);

export default intl;
