import React from 'react';
import style from './style.scss'
import LanguageSelector from './language_selector'
import Navigation from './navigation'

class Header extends React.Component {
    render() {
        const navBar = this.props.showNav ?
        <Navigation currentPage={this.props.currentPage}
            positions={this.props.positions} /> : '';

        return (
            <div className={style.component}>
                <LanguageSelector />
                {navBar}
            </div>
        );
    }
}

export default Header;
