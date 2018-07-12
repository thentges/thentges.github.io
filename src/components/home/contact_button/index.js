import React from 'react';
import style from './style.scss'
import Send from 'react-feather/dist/icons/send'

class ContactButton extends React.Component {
    render() {
        return (
            <div className={style.component}>
                    <span className='contact'>contact <Send className="icon" size={15}/> </span>
                    <span className='mail'>thibault.hentges@gmail.com</span>
            </div>
        )
    }
}

export default ContactButton;
