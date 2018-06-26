import React, { Component } from 'react';
import style from './style.scss'
import { Button } from 'semantic-ui-react'
import logo from './thentges_logo.png'
import { translate } from 'react-i18next';

class Home extends Component {
    render() {

        const { t } = this.props;

        return (
            <div className={style.component}>
                <div>
                    <img  className="logo" src={logo} alt={'thentges avatar'} />
                </div>
                <h1>
                     { t('home.title', { name: "Thibault" }) }
                </h1>
                <div>
                    <Button primary>{t('home.buttons.primary')}</Button>
                    <Button secondary>{t('home.buttons.secondary')}</Button>
                </div>
            </div>
        );
    }
}

export default translate('common')(Home);
