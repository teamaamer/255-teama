import { en } from './en';
import { ar } from './ar';
import { es } from './es';

export const translations = {
  en,
  ar,
  es,
};

export const getTranslation = (lang) => {
  return translations[lang] || translations.en;
};
