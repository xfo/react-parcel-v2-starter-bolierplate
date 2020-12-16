import {
    createIntl,
    createIntlCache
} from 'react-intl';

const messages = {
    'test.locale': 'EN'
};

const cache = createIntlCache();
const intl = createIntl({
    locale: 'en',
    messages
}, cache);
export default intl;