import React from 'react';
import style from './style.scss'
import BlockTitle from '../ui/block_title'
import SubTitle from '../ui/sub_title'
import { translate } from 'react-i18next';
import AppartooExperience from './appartoo'

class Experiences extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <div className={style.component}>
                <BlockTitle color='grey'>{t('exp.title')}</BlockTitle>

                <SubTitle color='grey' more={t('exp.appartoo.dates')} moreClass='appartoo-dates' >
                    {t('exp.intern' , {'enterprise': 'Appartoo'})}
                </SubTitle>
                <AppartooExperience />
            </div>
        );
    }
}

export default translate('common')(Experiences);
