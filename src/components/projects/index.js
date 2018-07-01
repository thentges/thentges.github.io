import React from 'react';
import style from './style.scss'
import BlockTitle from '../ui/block_title'
import { translate } from 'react-i18next';

class Projects extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <div className={style.component}>
                <BlockTitle color='white'>{t('projects.title')}</BlockTitle>
            </div>
        );
    }
}

export default translate('common')(Projects);
