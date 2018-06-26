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

const lang = navigator && navigator.language ?
    navigator.language.substr(0, 2) : 'en';


i18next.init({
    interpolation: { escapeValue: false },
    lng: lang,
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
