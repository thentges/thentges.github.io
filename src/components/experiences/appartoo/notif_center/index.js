import React from 'react'
import { translate } from 'react-i18next';
import SubExperience from '../../sub_experience';
import style from './style.scss'

function AppartooNotif(props) {
    const {t} = props
    const tags = [
        t('tags.back'), t('tags.notifications'), t('tags.refactoring'),
        t('tags.php'), t('tags.symfony'), t('tags.js'), t('tags.best_practices'), t('tags.api')
    ]
    return (
        <div className={style.component}>
            <SubExperience title={t('exp.appartoo.notif.title')}
                description={t('exp.appartoo.notif.main_desc')}
                list={JSON.parse(t('exp.appartoo.notif.list'))}
                end={t('exp.appartoo.notif.result')} tags={tags} />
        </div>
    )
}

export default translate('common')(AppartooNotif);
