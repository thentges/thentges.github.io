import React from 'react';
import style from './style.scss';

class Item extends React.Component {

    render() {
        const selected_css = this.props.isSelected ? ' selected' : '';

        return (
            <div className={style.component + selected_css} onClick={this.props.handleClick}>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Item;
