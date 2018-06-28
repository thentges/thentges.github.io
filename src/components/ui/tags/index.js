import React, { Component } from 'react';
import style from './style.scss'
import Tag from './tag'

class Tags extends Component {
    render() {
        const tags = this.props.list.map(
            (tag,i) => {
                return <Tag key={tag+i}>{tag}</Tag>
            }
        )

        return (
            <div className={style.component + ' ' + this.props.className}>
                {tags}
            </div>
        )
    }
}

export default Tags;
