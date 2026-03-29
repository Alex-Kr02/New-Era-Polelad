'use client';

import { useLanguage } from '../context/LanguageContext';
import en from '../translations/en.json';
import el from '../translations/el.json';

const translations: any = { en, el };

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string) => {
    const keys = key.split('.');
    let result = translations[language];

    for (const k of keys) {
      if (result[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      result = result[k];
    }

    return result;
  };

  return { t, language };
}
