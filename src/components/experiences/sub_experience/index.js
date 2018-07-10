import React from 'react'
import Tags from '../../ui/tags'
import style from './style.scss'

function SubExperience(props) {
    return (
        <div className={style.component}>
            <div className="title">{props.title}</div>
            <Tags list={props.tags || []} />
            <div className='text'>
                {props.description}
            </div>
            <div>
                <ul className="bullet-list">
                    {props.list.map(
                        (sentence, i) => {
                            return <li key={i} className="item">{sentence}</li>
                        }
                    )}
                </ul>
            </div>

            {props.end && <div className={`end`}>{props.end}</div>}
        </div>
    )
}

export default SubExperience;
