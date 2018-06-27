import React, { Component } from 'react';

class Tag extends Component {
    render() {
        return (
            <div className="tag">
                <span className="hashtag">#</span>
                {this.props.children}
            </div>
        )
    }
}

export default Tag;
