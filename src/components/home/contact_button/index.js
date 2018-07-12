import React from 'react';
import style from './style.scss'
import Mail from 'react-feather/dist/icons/mail'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { translate } from 'react-i18next';
import Tooltip from '../../ui/tooltip'

class ContactButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isMailCopied: false
        }
    }

    copy(){
        // we do not want to copy to clipboard if we're on a touch device
        this.setState({isMailCopied: true});
        setTimeout(() => {
            this.setState({isMailCopied: false});
        }, 1500);

    }

    render() {
        const {t} = this.props
        const email = 'thibault.hentges@gmail.com';

        const component = window.navigator.maxTouchPoints === 0 ?
        (
            <CopyToClipboard text={email} onCopy={this.copy.bind(this)}>
                <div className={style.component}>
                        <span className='contact'>contact <Mail className="icon" size={18}/> </span>
                        <span className='mail'>{email}</span>
                        <Tooltip show={this.state.isMailCopied} text={t('home.copied')} />
                </div>
            </CopyToClipboard>
        ) :
        (
            <div className={style.component}>
                    <span className='contact'>contact <Mail className="icon" size={18}/> </span>
                    <span className='mail'>{email}</span>
            </div>
        )

        return component
    }
}

export default translate('common')(ContactButton);
