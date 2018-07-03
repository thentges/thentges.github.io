import React from 'react'
import style from './style.scss'

export default class ExperienceMain extends React.Component {
    render() {
        const component = this.props.inverted ?
        (
            <div className={style.component}>
                <div className="image">
                    <img src={this.props.image} alt='' className="logo" />
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div  >
        ) :
        (
            <div className={style.component}>
                <div className="content">
                    {this.props.children}
                </div>
                <div className="image">
                    <img src={this.props.image} alt='' className="logo" />
                </div>
            </div>
        )


        return (
            <div className="experience">
                {component}
            </div>
        )
    }
}
