import React from 'react';
import style from './style.scss'

export default function SubTitle(props) {
    const more_class = props.moreClass ? props.moreClass : '';

    return (
            <h2 className={style.component}>
                <div className={'wrapper-' + props.color}>
                    <span className='text'>
                        {props.children}
                    </span>
                    <span className={'more ' + more_class}>
                        {props.more}
                    </span>
                </div>
            </h2>
    )
}
