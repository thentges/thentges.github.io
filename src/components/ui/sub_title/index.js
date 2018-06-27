import React from 'react';
import style from './style.scss'

export default function SubTitle(props) {
    let color_class

    return (
            <h2 className={style.component}>
                <div className={'wrapper-' + props.color}>
                    <span className='text'>
                        {props.children}
                    </span>
                </div>
            </h2>
    )
}
