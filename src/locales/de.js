import { createIntl, createIntlCache } from "react-intl";

const messages = {
    'test.locale': 'DE'
};

const cache = createIntlCache();
const intl = createIntl(
  {
    locale: "de",
    messages,
  },
  cache
);
export default intl;
