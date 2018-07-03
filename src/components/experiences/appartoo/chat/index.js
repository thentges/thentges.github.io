import React from 'react'
import { translate } from 'react-i18next';
import appartoo_chat from '../../../../images/appartoo_chat.png'
import SubExperience from '../../sub_experience';
import style from './style.scss'

function AppartooChat(props) {
    const {t} = props

    const tags = [
        t('tags.back'), t('tags.php'), t('tags.symfony'),
        t('tags.chat'), t('tags.websockets'), t('tags.security'),
        t('tags.mySQL'), t('tags.doctrine'), t('tags.ux'), t('tags.js'),
        t('tags.angularJS')
    ]

    return (
        <div className={style.component}>
            <SubExperience title={t('exp.appartoo.chat.title')}
                description={t('exp.appartoo.chat.main_desc')}
                list={JSON.parse(t('exp.appartoo.chat.list'))} tags={tags}
                end={t('exp.appartoo.chat.result')} image={appartoo_chat}>
                <img src={appartoo_chat} alt='' />
            </SubExperience>
        </div>
    )
}

export default translate('common')(AppartooChat);
