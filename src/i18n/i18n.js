import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translationEN } from './en/en';
import { translationHI } from './hi/hi';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        // lng: 'en', 
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        resources: {
            en: {
                translation: translationEN
            },
            hi: {
                translation: translationHI
            }
        }
    });

// Set the query param language based on the detected or default language
i18next.init({
    lng: i18next.language || 'en',
});

// Update the URL with the new language query parameter
const url = new URL(window.location.href);
url.searchParams.set('lang', i18next.language);

// Replace the current URL with the updated URL
window.history.replaceState(null, '', url.toString());


