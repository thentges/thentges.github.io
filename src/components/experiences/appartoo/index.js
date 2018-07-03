import React from 'react';
import { translate } from 'react-i18next';
import ExperienceMain from '../experience_main'
import Tags from '../../ui/tags'
import Divider from '../../ui/divider'
import appartoo_logo from '../../../images/appartoo.png'
import appartoo_chat from '../../../images/appartoo_chat.png'

class AppartooExperience extends React.Component {
    render() {
        const {t} = this.props;
            const appartoo_tags = [
                t('tags.full_stack'), t('tags.dev'), t('tags.web'),
                t('tags.back'), t('tags.api'), t('tags.php'), t('tags.symfony'),
                t('tags.front'), t('tags.js'), t('tags.angularJS'),
                t('tags.mySQL'), t('tags.nginx')
            ]
        const appartoo_description_formatted = nl2br(t('exp.appartoo.description'))
        const appartoo_chat_formatted = nl2br(t('exp.appartoo.chat.main_desc'))

        return (
            <React.Fragment>
                <ExperienceMain image={appartoo_logo}>
                    <div className="status">{t('exp.appartoo.status')}</div>
                    <Tags list={appartoo_tags} inverted />
                    <div className='text'>
                        {appartoo_description_formatted}
                    </div>
                </ExperienceMain>
                <Divider size='half-width' />
                <div className='more-infos'>
                    <div className='subtitle'>{t('exp.appartoo.missions')}</div>
                    <div className="status">{t('exp.appartoo.chat.title')}</div>
                    <Tags list={[]} inverted />
                    <div className='text'>
                        {appartoo_chat_formatted}
                    </div>
                    <div className="image-list">
                        <img src={appartoo_chat} alt='' />
                        <ul className="bullet-list">
                            {JSON.parse(t('exp.appartoo.chat.list')).map(
                                (sentence) => {
                                    return <li className="item">{sentence}</li>
                                }
                            )}
                        </ul>
                    </div>
                    <div className="end">{t('exp.appartoo.chat.result')}</div>
                </div>
            </React.Fragment>
        );
    }
}

const nl2br = (text) => {
    return text.split('\n').map(
        (item, key) => {
            return <span key={key}>{item}<br/></span>
        }
    );
}

export default translate('common')(AppartooExperience);
