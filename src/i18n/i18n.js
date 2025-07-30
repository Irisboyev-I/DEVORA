import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импорт перевода в .js
import en from '../locale/en';
import ru from '../locale/ru';
import uz from '../locale/uz';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz }
    },
    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
