import React from 'react';
import { translate } from 'react-i18next';
import style from './style.scss'

class LanguageSelector extends React.Component {
    changeLanguage(lang) {
        this.props.i18n.changeLanguage(lang);
    }

    render() {
        const lang = this.props.i18n.language;
        console.log(lang);

        return (
            <div className={style.component} >
                <div className={"link lang" + (lang === 'fr' ? ' selected' : '') }
                    onClick={this.changeLanguage.bind(this ,'fr')}>
                Français (FR)
                </div>
                <div>|</div>
                <div className={"link lang" + (lang === 'en' ? ' selected' : '') }
                    onClick={this.changeLanguage.bind(this ,'en')}>
                English (EN)
                </div>
            </div>
        );
    }
}

export default translate('common')(LanguageSelector);
