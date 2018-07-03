import React from 'react'
import { translate } from 'react-i18next';
import appartoo_notif from '../../../../images/appartoo_notif.png'
import SubExperience from '../../sub_experience';
import style from './style.scss'

function AppartooNotif(props) {
    const {t} = props
    const tags = [
        t('tags.back'), t('tags.notifications'), t('tags.refactoring'),
        t('tags.php'), t('tags.symfony'), t('tags.js')
    ]
    return (
        <div className={style.component}>
            <SubExperience title={t('exp.appartoo.notif.title')}
                description={t('exp.appartoo.notif.main_desc')}
                list={JSON.parse(t('exp.appartoo.notif.list'))}
                inverted end={t('exp.appartoo.notif.result')} tags={tags}>
                <img src={appartoo_notif} alt=''/>
            </SubExperience>
        </div>
    )
}

export default translate('common')(AppartooNotif);
