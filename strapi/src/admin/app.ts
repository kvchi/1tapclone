import type { StrapiApp } from '@strapi/strapi/admin';
import logo from './extensions/logo.png'
import favicon from '../../favicon.png'
export default {
  // config: {
  //   locales: [
  //     // 'ar',
  //     // 'fr',
  //     // 'cs',
  //     // 'de',
  //     // 'dk',
  //     // 'es',
  //     // 'he',
  //     // 'id',
  //     // 'it',
  //     // 'ja',
  //     // 'ko',
  //     // 'ms',
  //     // 'nl',
  //     // 'no',
  //     // 'pl',
  //     // 'pt-BR',
  //     // 'pt',
  //     // 'ru',
  //     // 'sk',
  //     // 'sv',
  //     // 'th',
  //     // 'tr',
  //     // 'uk',
  //     // 'vi',
  //     // 'zh-Hans',
  //     // 'zh',
  //   ],
  // },
  config: {
    auth: {
      logo
    },
    head: {
      favicon:favicon
    },
    menu: {
      logo
    },
    theme: {
      colors: {
        primary100: "",
        primary200: "#2E95F4",
        primary500: "#2E95F4",
        primary600: "#2E95F4",
        primary700: "#2E95F4",
        danger700: "#2E95F4",
      },
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "1Tap Dashboard",
        "Auth.form.welcome.title": "Welcome to 1Tap Admin",
        "Auth.form.welcome.subtitle": "Login to your account",
        "Settings.profile.form.section.experience.interfaceLanguageHelp": "Preference changes will apply only to you"
      },
    },

    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
