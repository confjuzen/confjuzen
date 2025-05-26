import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enProjects from './local/en/projects.json';
import frProjects from './local/fr/projects.json';
import enLinks from './local/en/links.json';
import frLinks from './local/fr/links.json';
import enWebprojects from './local/en/webprojects.json';

i18n
.use(initReactI18next)
.init({
  resources: {
    en: {
      projects: enProjects,
      links: enLinks,
      webprojects: enWebprojects
    },
    fr: {
      projects: frProjects,
      links: frLinks
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;
