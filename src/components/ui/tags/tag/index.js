import React, { Component } from 'react';
import Check from 'react-feather/dist/icons/check';

class Tag extends Component {
    render() {
        return (
            <div className="tag">
                <Check className='hashtag' size='15' />
                {this.props.children}
            </div>
        )
    }
}

export default Tag;
