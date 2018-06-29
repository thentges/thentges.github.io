import React, { Component } from 'react';
import style from './style.scss'
import BlockTitle from '../ui/block_title'
import SubTitle from '../ui/sub_title'
import { translate } from 'react-i18next';
import LanguagesCards from './languages';
import BackEndCards from './back';
import FrontEndCards from './front';
import DataBaseCards from './databases';
<<<<<<< Updated upstream
import TestsCard from './tests';
=======
import TestsCards from './tests';
import OthersCards from './others';
import CheckCircle from 'react-feather/dist/icons/check-circle';
import Database from 'react-feather/dist/icons/database';
import HardDrive from 'react-feather/dist/icons/hard-drive';
import Chrome from 'react-feather/dist/icons/chrome';
import Code from 'react-feather/dist/icons/code';
import PlusCircle from 'react-feather/dist/icons/plus-circle';
>>>>>>> Stashed changes

class Skills extends Component {
    render() {
        const {t} = this.props;
        return (
            <div className={style.component}>
                <BlockTitle color='white'>{t('skills.title')}</BlockTitle>
<<<<<<< Updated upstream
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
=======
                <SubTitle color='white'>
                    <Code className='subtitle-icon' /> {t('skills.languages')}
                </SubTitle>
                <LanguagesCards />

                <SubTitle color='white'>
                    <HardDrive className='subtitle-icon' /> Back-end
                </SubTitle>
                <BackEndCards />

                <SubTitle color='white'>
                    <Chrome className='subtitle-icon' /> Front-end
                </SubTitle>
                <FrontEndCards />

                <SubTitle color='white'>
                    <Database className='subtitle-icon' /> {t('skills.databases')}
                </SubTitle>
                <DataBaseCards />

                <SubTitle color='white'>
                    <CheckCircle className='subtitle-icon' /> {t('skills.unit_testing')}
                </SubTitle>
                <TestsCards />

                <SubTitle color='white'>
                    <PlusCircle className='subtitle-icon' /> {t('skills.others')}
                </SubTitle>
                <OthersCards />
>>>>>>> Stashed changes
            </div>
        );
    }
}

export default translate('common')(Skills);
