import React from 'react'
import Item from '../../item'
import logo from '../../../../images/thentges_logo.png'
import { translate } from 'react-i18next';

class LaptopNav extends React.Component {
    render() {
        const {t} = this.props

        return (
            <div className="laptop-menu">
                <img className="logo" src={logo} alt={'thentges avatar'}
                    onClick={this.props.goTo.home} />

                <div className="nav">
                    <Item isSelected={this.props.currentPage === 'skills'}
                        handleClick={this.props.goTo.skills}>
                        {t('nav.skills')}
                    </Item>
                    <Item isSelected={this.props.currentPage === 'exp'}
                        handleClick={this.props.goTo.exp}>
                        {t('nav.exp')}
                    </Item>
                    <Item isSelected={this.props.currentPage === 'projects'}
                        handleClick={this.props.goTo.projects}>
                        {t('nav.projects')}
                    </Item>
                </div>
            </div>
        )
    }
}

export default translate('common')(LaptopNav);
