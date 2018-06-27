import React from 'react';
import { translate } from 'react-i18next';
import style from './style.scss'
import Item from '../item'

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
                <Item isSelected={lang === 'fr'}
                    handleClick={this.changeLanguage.bind(this, 'fr')}>
                    {FRENCH}
                </Item>
                <div>|</div>
                <Item isSelected={lang === 'en'}
                    handleClick={this.changeLanguage.bind(this, 'en')}>
                    {ENGLISH}
                </Item>
            </div>
        );
    }
}

export default translate('common')(LanguageSelector);
