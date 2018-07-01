import React from 'react';
import style from './style.scss'
import LaptopNav from './laptop'
import MobileNav from './mobile'

class Navigation extends React.Component {
    render() {
        return (
            <div className={style.component}>
                {this.props.showNav && <LaptopNav goTo={this.props.goTo} currentPage={this.props.currentPage} />}
                <MobileNav goTo={this.props.goTo} currentPage={this.props.currentPage}
                    isMobileMenuShowing={this.props.isMobileMenuShowing} toggleMobileMenu={this.props.toggleMobileMenu} />
            </div>
        );
    }
}

export default Navigation;
