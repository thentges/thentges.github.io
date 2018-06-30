import React from 'react';
import style from './style.scss'
import LaptopNav from './laptop'

class Navigation extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <div className={style.component}>
                <LaptopNav goTo={this.props.goTo} currentPage={this.props.currentPage} />
            </div>
        );
    }
}

export default Navigation;
