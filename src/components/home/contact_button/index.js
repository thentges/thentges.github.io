import React from 'react';
import style from './style.scss'
import Send from 'react-feather/dist/icons/send'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { translate } from 'react-i18next';

class ContactButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isMailCopied: false
        }
    }

    copy(){
        // we do not want to copy to clipboard if we're on a touch device
        if (window.navigator.maxTouchPoints === 0) {
            this.setState({isMailCopied: true});
            setTimeout(() => {
                this.setState({isMailCopied: false});
            }, 1500);
        }
    }

    render() {
        const {t} = this.props
        const email = 'thibault.hentges@gmail.com';

        const tooltip_css = this.state.isMailCopied ? 'visible' : 'hidden';
        const tooltip = (
            <span className={"tooltip " + tooltip_css}>
                {t('home.copied')}
            </span>
        )

        return (
            <CopyToClipboard text={email} onCopy={this.copy.bind(this)}>
                <div className={style.component}>
                        <span className='contact'>contact <Send className="icon" size={15}/> </span>
                        <span className='mail'>{email}</span>
                        {window.navigator.maxTouchPoints === 0 && tooltip}
                </div>
            </CopyToClipboard>
        )
    }
}

export default translate('common')(ContactButton);
