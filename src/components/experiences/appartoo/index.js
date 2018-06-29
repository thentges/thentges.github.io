import React from 'react';
import { translate } from 'react-i18next';
import appartoo_logo from '../../../images/appartoo.png'
import Experience from '../experience'
import Tags from '../../ui/tags'

class AppartooExperience extends React.Component {
    render() {
        const {t} = this.props;
        const appartoo_image = <img src={appartoo_logo} alt='Appartoo logo' className="appartoo-logo" />
            const appartoo_tags = [
                t('tags.full_stack'), t('tags.dev'), t('tags.web'),
                t('tags.back'), t('tags.api'), t('tags.php'), t('tags.symfony'),
                t('tags.front'), t('tags.js'), t('tags.angularJS'),
                t('tags.mySQL'), t('tags.nginx')
            ]
        const appartoo_description_formatted = t('exp.appartoo.description').split('\n').map(
            (item, key) => {
                return <span key={key}>{item}<br/></span>
            });

        return (
            <Experience image={appartoo_image}>
                <div className="status">{t('exp.appartoo.status')}</div>
                <Tags list={appartoo_tags} inverted />
                <div className='text'>
                    {appartoo_description_formatted}
                </div>
            </Experience>
        );
    }
}

export default translate('common')(AppartooExperience);
