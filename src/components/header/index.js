import React from 'react';
import { translate } from 'react-i18next';
import style from './style.scss'
import LanguageSelector from './language_selector'

class Header extends React.Component {
    render() {
        return (
            <div className={style.component}>
                <LanguageSelector />
                {this.props.showNav && 'oooo'}
            </div>
        );
    }
}

export default Header;
