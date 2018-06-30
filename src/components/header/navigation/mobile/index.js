import React from 'react'
import MobileItem from './item'
import { translate } from 'react-i18next';
import Menu from 'react-feather/dist/icons/menu';
import Share2 from 'react-feather/dist/icons/share-2';
import BriefCase from 'react-feather/dist/icons/briefcase';
import Home from 'react-feather/dist/icons/home';

class MobileNav extends React.Component {
    customClick(goTo_function) {
        this.props.toggleMobileMenu();
        goTo_function();
    }

    render() {
        const {t} = this.props
        const is_showing_css = this.props.isMobileMenuShowing ? 'show' : 'hide';

        return (
            <div className="mobile-menu">
                <Menu className="hamburger" onClick={this.props.toggleMobileMenu} />
                <div className={"menu " + is_showing_css}>
                    <MobileItem isSelected={this.props.currentPage === 'home'} first
                        handleClick={this.customClick.bind(this, this.props.goTo.home)}>
                        <Home className='icon' /> {t('nav.home')}
                    </MobileItem>
                    <MobileItem isSelected={this.props.currentPage === 'skills'}
                        handleClick={this.customClick.bind(this, this.props.goTo.skills)}>
                        <Share2 className='icon' /> {t('nav.skills')}
                    </MobileItem>
                    <MobileItem isSelected={this.props.currentPage === 'exp'}
                        handleClick={this.customClick.bind(this, this.props.goTo.exp)}>
                        <BriefCase className='icon' /> {t('nav.exp')}
                    </MobileItem>
                </div>
            </div>
        )
    }
}

export default translate('common')(MobileNav);
