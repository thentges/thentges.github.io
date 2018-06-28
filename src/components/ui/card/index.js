import React from 'react';
import style from './style.scss'

class Card extends React.Component {
    render() {
        return (
            <div className={style.component}>
                <div className='image'>
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                <div className='text'>
                    {this.props.name}
                </div>
            </div>
        )
    }
}

export default Card;
