import React, { Component } from 'react';
import style from './style.scss'
import { Button } from 'semantic-ui-react'
import logo from './thentges_logo.png'
import { translate } from 'react-i18next';
import Tags from '../ui/tags'

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
                <div className="about">
                    You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
                    <br />
                    <div className="quote">
                        {'Samuel L Ipsum from '}
                        <a href="http://slipsum.com/">{'http://slipsum.com/'}</a>
                    </div>
                    <Tags list={["TAG1", "TAG2", "TAG3"]} />
                </div>
                <div className="buttons">
                    <Button primary>{t('home.buttons.primary')}</Button>
                    <Button secondary>{t('home.buttons.secondary')}</Button>
                </div>
            </div>
        );
    }
}

export default translate('common')(Home);
