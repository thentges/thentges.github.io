import React, { Component } from 'react';
import style from './style.scss'
import Tag from './tag'

class Tags extends Component {
    render() {
        const tag_css_class = this.props.inverted ? "inverted" : '';
        const tags = this.props.list.map(
            (tag,i) => {
                return <Tag className={tag_css_class} key={tag+i}>{tag}</Tag>
            }
        )

        const container_class = this.props.className ? this.props.className : '';

        return (
            <div className={style.component + ' ' + container_class}>
                {tags}
            </div>
        )
    }
}

export default Tags;
