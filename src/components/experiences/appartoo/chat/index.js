import React from 'react'
import { translate } from 'react-i18next';
import appartoo_chat from '../../../../images/appartoo_chat.png'
import SubExperience from '../../sub_experience';
import style from './style.scss'

function AppartooChat(props) {
    const {t} = props
    return (
        <div className={style.component}>
            <SubExperience title={t('exp.appartoo.chat.title')}
                description={t('exp.appartoo.chat.main_desc')}
                list={JSON.parse(t('exp.appartoo.chat.list'))}
                end={t('exp.appartoo.chat.result')} image={appartoo_chat}>
                <img src={appartoo_chat} alt='' />
            </SubExperience>
        </div>
    )
}

export default translate('common')(AppartooChat);
