import React from 'react';
import { translate } from 'react-i18next';
import style from './style.scss'
import LangItem from './lang_item'

class LanguageSelector extends React.Component {
    changeLanguage(lang) {
        this.props.i18n.changeLanguage(lang);
    }

    render() {
        const lang = this.props.i18n.language
        const FRENCH = 'Français (FR)'
        const ENGLISH = 'English (EN)'

        return (
            <div className={style.component}>
                <LangItem isSelected={lang === 'fr'}
                    changeLanguage={this.changeLanguage.bind(this, 'fr')}>
                    {FRENCH}
                </LangItem>
                <div>|</div>
                <LangItem isSelected={lang === 'en'}
                    changeLanguage={this.changeLanguage.bind(this, 'en')}>
                    {ENGLISH}
                </LangItem>
            </div>
        );
    }
}

export default translate('common')(LanguageSelector);
