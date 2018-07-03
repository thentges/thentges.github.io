import React from 'react'
import { translate } from 'react-i18next';
import appartoo_profile from '../../../../images/appartoo_ux_profile.png'
import appartoo_group from '../../../../images/appartoo_ux_group.png'
import appartoo_search from '../../../../images/appartoo_search.png'
import SubExperience from '../../sub_experience';
import style from './style.scss'

function AppartooUX(props) {
    const {t} = props
    const end = (
        <div className="images">
            <img src={appartoo_profile} alt=''/>
            <img src={appartoo_group} alt=''/>
        </div>
    )
    return (
        <div className={style.component}>
            <SubExperience title={t('exp.appartoo.ux.title')}
                description={t('exp.appartoo.ux.main_desc')}
                list={JSON.parse(t('exp.appartoo.ux.list'))}
                end={end}>
                <img src={appartoo_search} alt='' />
            </SubExperience>
        </div>
    )
}

export default translate('common')(AppartooUX);
