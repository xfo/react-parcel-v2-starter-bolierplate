import de from "./de";
import en from "./en";
import es from "./es";
import lv from "./lv";
import ru from "./ru";

import { FALLBACK_LOCALE } from '../utils/constants'

export const locales = {
  de,
  en,
  es,
  lv,
  ru,
};

const isLocaleListed = (locales, locale) => locales[locale] !== undefined;

export const getCurrentLocale = () => {
  const pageLang = document.documentElement.lang.split("-")[0];
  const OSLang = window.navigator && window.navigator.language.split("-")[0];

  if (isLocaleListed(locales, pageLang)) {
    return pageLang;
  }

  if (isLocaleListed(locales, OSLang)) {
    return OSLang;
  }

  return FALLBACK_LOCALE;
};

export const getLocaleData = (locale, locales) => (locale && locales[locale]) || locales[FALLBACK_LOCALE];
