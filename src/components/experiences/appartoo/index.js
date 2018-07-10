import React from 'react';
import { translate } from 'react-i18next';
import ExperienceMain from '../experience_main'
import Tags from '../../ui/tags'
import Divider from '../../ui/divider'
import appartoo_logo from '../../../images/appartoo.png'
import AppartooChat from './chat'
import AppartooUX from './ux'
import AppartooNotif from './notif_center'

class AppartooExperience extends React.Component {
    render() {
        const {t} = this.props;
            const appartoo_tags = [
                t('tags.full_stack'), t('tags.dev'), t('tags.web'),
                t('tags.back'), t('tags.api'), t('tags.php'), t('tags.symfony'),
                t('tags.front'), t('tags.js'), t('tags.angularJS'),
                t('tags.mySQL'), t('tags.doctrine'), t('tags.nginx')
            ]
        const appartoo_description_formatted = nl2br(t('exp.appartoo.description'))

        return (
            <React.Fragment>
                <ExperienceMain image={appartoo_logo}>
                    <div className="status">{t('exp.appartoo.status')}</div>
                    <Tags list={appartoo_tags} inverted />
                    <div className='text'>
                        {appartoo_description_formatted}
                    </div>
                </ExperienceMain>
                <Divider />
                <div className='more-infos'>
                    <div className='subtitle'>{t('exp.appartoo.missions')}</div>
                    <AppartooChat />
                    <Divider size='half-width' />
                    <AppartooNotif />
                    <Divider size='half-width' />
                    <AppartooUX />
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
