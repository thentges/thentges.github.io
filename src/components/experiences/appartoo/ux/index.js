import React from 'react'
import { translate } from 'react-i18next';
import SubExperience from '../../sub_experience';
import style from './style.scss'

function AppartooUX(props) {
    const {t} = props

    const tags = [
        t('tags.front'), t('tags.ux'), t('tags.refactoring'),
        t('tags.js'), t('tags.angularJS'), t('tags.best_practices'), t('tags.responsive'),
        t('tags.ui')
    ]

    return (
        <div className={style.component}>
            <SubExperience title={t('exp.appartoo.ux.title')}
                description={t('exp.appartoo.ux.main_desc')}
                list={JSON.parse(t('exp.appartoo.ux.list'))} tags={tags}/>
        </div>
    )
}

export default translate('common')(AppartooUX);
