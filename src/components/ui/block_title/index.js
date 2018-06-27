import React from 'react';
import style from './style.scss'

export default function BlockTitle(props) {
    let color_class

    return (
            <h1 className={style.component}>
                <span className={'text ' + props.color}>{props.children}</span>
            </h1>
    )
}
