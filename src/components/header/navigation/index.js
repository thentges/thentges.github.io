import React from 'react';
import { translate } from 'react-i18next';
import style from './style.scss'
import Item from '../item'

class Navigation extends React.Component {
    goTo(position){
        window.scrollTo(0, position);
    }

    render() {
        const {t} = this.props;
        return (
            <div className={style.component}>
                <Item isSelected={this.props.currentPage === 'home'}
                    handleClick={this.goTo.bind(this, this.props.positions.home)}>
                    {t('nav.top')}
                </Item>
                <Item isSelected={this.props.currentPage === 'skills'}
                    handleClick={this.goTo.bind(this, this.props.positions.skills)}>
                    {t('nav.skills')}
                </Item>
            </div>
        );
    }
}

export default translate('common')(Navigation);
