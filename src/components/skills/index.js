import React, { Component } from 'react';
import style from './style.scss'
import BlockTitle from '../ui/block_title'
import SubTitle from '../ui/sub_title'
import { translate } from 'react-i18next';
import LanguagesCards from './languages';
import BackEndCards from './back';
import FrontEndCards from './front';
import DataBaseCards from './databases';
import TestsCard from './tests';

class Skills extends Component {
    render() {
        const {t} = this.props;
        return (
            <div className={style.component}>
                <BlockTitle color='white'>{t('skills.title')}</BlockTitle>
                <SubTitle color='white'>{t('skills.languages')}</SubTitle>
                    <LanguagesCards />
                <SubTitle color='white'>Back-end</SubTitle>
                    <BackEndCards />
                <SubTitle color='white'>Front-end</SubTitle>
                    <FrontEndCards />
                <SubTitle color='white'>{t('skills.databases')}</SubTitle>
                    <DataBaseCards />
                <SubTitle color='white'>{t('skills.unit_testing')}</SubTitle>
                    <TestsCard />
            </div>
        );
    }
}

export default translate('common')(Skills);
