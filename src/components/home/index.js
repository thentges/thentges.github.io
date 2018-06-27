import React, { Component } from 'react';
import style from './style.scss'
import { Button } from 'semantic-ui-react'
import logo from '../../images/thentges_logo.png'
import { translate } from 'react-i18next';
import Tags from '../ui/tags'
import HomeNav from './navigation'

class Home extends Component {
    render() {

        const { t } = this.props;

        return (
            <div className={style.component}>
                <div>
                    <img className="logo" src={logo} alt={'thentges avatar'} />
                </div>
                <h1 className="title">Thibault HENTGÈS</h1>
                <div className="subtitle">Full Stack blabla</div>
                <div className="about">
                    blablablablablabla
                </div>
                <HomeNav />
                <div className="buttons">
                    <Button primary>{t('home.buttons.primary')}</Button>
                    <Button secondary>{t('home.buttons.secondary')}</Button>
                </div>
            </div>
        );
    }
}

export default translate('common')(Home);
