import React, { Component } from 'react';
import TagIcon from 'react-feather/dist/icons/tag';

class Tag extends Component {
    render() {
        return (
            <div className={"tag " + this.props.className}>
                <TagIcon className='hashtag' size='15' />
                {this.props.children}
            </div>
        )
    }
}

export default Tag;
