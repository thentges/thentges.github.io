import React from 'react';
import { translate } from 'react-i18next';
import style from './style.scss'
import Item from '../item'
import logo from '../../../images/thentges_logo.png'

class Navigation extends React.Component {
    goTo(position){
        window.scrollTo(0, position);
    }

    render() {
        const {t} = this.props;
        return (
            <div className={style.component}>
                <img className="logo" src={logo} alt={'thentges avatar'}
                    onClick={this.goTo.bind(this, this.props.positions.home)} />

                <div className="nav">
                    <Item isSelected={this.props.currentPage === 'skills'}
                        handleClick={this.goTo.bind(this, this.props.positions.skills)}>
                        {t('nav.skills')}
                    </Item>
                    <Item isSelected={this.props.currentPage === 'exp'}
                        handleClick={this.goTo.bind(this, this.props.positions.exp)}>
                        {t('nav.exp')}
                    </Item>
                </div>
            </div>
        );
    }
}

export default translate('common')(Navigation);
