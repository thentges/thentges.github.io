import React from 'react';
import { translate } from 'react-i18next';
import style from './style.scss'
import Item from '../item'
import logo from '../../../images/thentges_logo.png'

class Navigation extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <div className={style.component}>
                <img className="logo" src={logo} alt={'thentges avatar'}
                    onClick={this.props.goTo.home} />

                <div className="nav">
                    <Item isSelected={this.props.currentPage === 'skills'}
                        handleClick={this.props.goTo.skills}>
                        {t('nav.skills')}
                    </Item>
                </div>
            </div>
        );
    }
}

export default translate('common')(Navigation);
