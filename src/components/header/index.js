import React from 'react';
import style from './style.scss'
import LanguageSelector from './language_selector'
import Navigation from './navigation'

class Header extends React.Component {
    render() {
        return (
            <div className={style.component}>
                <LanguageSelector />
                <Navigation currentPage={this.props.currentPage}
                    showNav={this.props.showNav} goTo={this.props.goTo}
                    isMobileMenuShowing={this.props.isMobileMenuShowing}
                    toggleMobileMenu={this.props.toggleMobileMenu} />
            </div>
        );
    }
}

export default Header;
