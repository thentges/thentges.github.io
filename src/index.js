import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './semantic/dist/semantic.min.css';
import i18next from 'i18next';
import {I18nextProvider} from 'react-i18next';
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";

const AppContainer = () => (
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>
)

const getLanguage = () => {
    let lang
    // taking saved lang in localStorage or navigator language
    if (localStorage && localStorage.getItem('lang'))
        lang = localStorage.getItem('lang')
    else if (navigator && navigator.language)
        lang = navigator.language.substr(0,2)
    // if it's not one of the lang we support, put english
    if (lang !== 'en' && lang !== 'fr')
        lang = 'en'
    return lang;
}

i18next.init({
    interpolation: { escapeValue: false },
    lng: getLanguage(),
    resources: {
        en: {
            common: common_en
        },
        fr: {
            common: common_fr
        },
    },
});

ReactDOM.render(<AppContainer />, document.getElementById('root'));
