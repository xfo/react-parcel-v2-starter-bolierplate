import {
    createIntl,
    createIntlCache
} from 'react-intl';

const messages = {
    'test.locale': 'ES'
};

const cache = createIntlCache();
const intl = createIntl({
    locale: 'es',
    messages
}, cache);
export default intl;