import React from 'react'
import style from './style.scss'

class Divider extends React.Component {
    render() {
        return(
            <div className={style.component} >
                <div className={`divider ${this.props.size || 'full-width'}`}></div>
            </div>
        )
    }
}

export default Divider;
