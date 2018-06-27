import React, { Component } from 'react';
import style from './style.scss'
import BlockTitle from '../ui/block_title'
import SubTitle from '../ui/sub_title'
import { translate } from 'react-i18next';

class Skills extends Component {
    render() {
        const {t} = this.props;
        return (
            <div className={style.component}>
                <BlockTitle color='white'>{t('skills.title')}</BlockTitle>
                <SubTitle color='white'>{t('skills.backend')}</SubTitle>
            </div>
        );
    }
}

export default translate('common')(Skills);
