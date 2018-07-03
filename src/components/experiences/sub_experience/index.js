import React from 'react'
import Tags from '../../ui/tags'

function SubExperience(props) {
    return (
        <React.Fragment>
            <div className="status">{props.title}</div>
            <Tags list={props.tags || []} inverted />
            <div className='text'>
                {props.description}
            </div>
            <div className={`image-list ${props.inverted ? 'inverted' : ''}`}>
                {props.children}
                <ul className="bullet-list">
                    {props.list.map(
                        (sentence, i) => {
                            return <li key={i} className="item">{sentence}</li>
                        }
                    )}
                </ul>
            </div>
            {props.end && <div className={`end`}>{props.end}</div>}
        </React.Fragment>
    )
}

export default SubExperience;
