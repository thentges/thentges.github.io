import React from 'react'

export default class Experience extends React.Component {
    render() {
        return (
            <div className="experience">
                <div className="content">
                    {this.props.children}
                </div>
                <div className="image">
                    {this.props.image}
                </div>
            </div>
        )
    }
}
