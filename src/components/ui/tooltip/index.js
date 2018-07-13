import React from 'react'
import style from './style.scss'

export default function Tooltip(props){
    const tooltip_css = props.show ? ' visible' : ' hidden';

    return (
        <span className={style.component + tooltip_css}>
            {props.text}
        </span>
    )
}
