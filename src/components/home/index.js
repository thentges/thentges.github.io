import React, { Component } from 'react';
import style from './style.scss'
import logo from '../../images/thentges_logo.png'
import { translate } from 'react-i18next';
import Tags from '../ui/tags'
import HomeNav from './navigation'

class Home extends Component {
    render() {

        const { t } = this.props;
        const tag_list = [
            t('tags.back'), t('tags.best_practices'), t('tags.full_stack'),
            t('tags.web'), t('tags.dev'), t('tags.engineer')
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
                    <HomeNav positions={this.props.positions} />
                </div>
            </div>
        );
    }
}

export default translate('common')(Home);
