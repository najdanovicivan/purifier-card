// Borrowed from:
// https://github.com/custom-cards/boilerplate-card/blob/master/src/localize/localize.ts

import * as en from './translations/en.json';
import * as uk from './translations/uk.json';
import * as tr from './translations/tr.json';
import * as fr from './translations/fr.json';
import * as nb from './translations/nb.json';
import * as pl from './translations/pl.json';
import * as bg from './translations/bg.json';
import * as zh_CN from './translations/zh-CN.json';
import * as zh_TW from './translations/zh-TW.json';
import * as de from './translations/de.json';
import * as ca from './translations/ca.json';
import * as ru from './translations/ru.json';
import * as it from './translations/it.json';
import * as cs from './translations/cs.json';

var languages = {
  en,
  uk,
  fr,
  tr,
  nb,
  pl,
  bg,
  zh_CN,
  zh_TW,
  de,
  ca,
  ru,
  it,
  cs,
};

const DEFAULT_LANG = 'en';

export default function localize(string, search, replace) {
  const [section, key] = string.split('.');

  let langStored;

  try {
    langStored = JSON.parse(localStorage.getItem('selectedLanguage'));
  } catch (e) {
    langStored = localStorage.getItem('selectedLanguage');
  }

  const lang = (langStored || navigator.language.split('-')[0] || DEFAULT_LANG)
    .replace(/['"]+/g, '')
    .replace('-', '_');

  let translated;

  try {
    translated = languages[lang][section][key];
  } catch (e) {
    /**/
  }

  if (translated === undefined) {
    try {
      translated = languages[DEFAULT_LANG][section][key];
    } catch (e) {
      /**/
    }
  }

  if (translated === undefined) {
    return;
  }

  if (search !== '' && replace !== '') {
    translated = translated.replace(search, replace);
  }

  return translated;
}
