import React from 'react'

class HomeButton extends React.Component {
    render(){
        return (
            <div className="button" onClick={this.props.handleClick}>
                <span className='text'>{this.props.children}</span>
                <span className='icon'>{this.props.icon}</span>
            </div>
        )
    }
}

export default HomeButton;
