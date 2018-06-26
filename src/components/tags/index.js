import React, { Component } from 'react';
import style from './style.scss'
import Tag from './tag'

class Tags extends Component {
    render() {
        const tags = this.props.list.map(
            (tag) => {
                return <Tag>{tag}</Tag>
            }
        )

        return (
            <div className={style.component}>
                {tags}
            </div>
        )
    }
}

export default Tags;
