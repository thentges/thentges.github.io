import React, { Component } from 'react';
import style from './style.scss'
import { Button } from 'semantic-ui-react'
import logo from '../../images/thentges_logo.png'
import { translate } from 'react-i18next';
import Tags from '../ui/tags'
import HomeNav from './navigation'

// <div className="buttons">
//     <Button primary>{t('home.buttons.primary')}</Button>
//     <Button secondary>{t('home.buttons.secondary')}</Button>
// </div>


class Home extends Component {
    render() {

        const { t } = this.props;
        const tag_list = [
            t('tags.engineer'), t('tags.dev'), t('tags.web'), t('tags.full_stack'),
            t('tags.best_practices'), t('tags.back')
        ]

        return (
            <div className={style.component}>
                <div className="flex-container">
                    <div>
                        <img className="logo" src={logo} alt={'thentges avatar'} />
                    </div>
                    <h1 className="title">Thibault HENTGÈS</h1>
                    <div className="subtitle">
                        {t('home.subtitle')}<a href='https://www.isep.fr/'>ISEP</a> (Paris, France)
                    </div>
                    <div className="about">
                        <div>{t('home.about')}</div>
                        <Tags className='tags' list={tag_list} />
                    </div>
                    <HomeNav />
                </div>
            </div>
        );
    }
}

export default translate('common')(Home);
