import React from 'react'
import style from './style.scss'
import GitHub from 'react-feather/dist/icons/github';
import { translate } from 'react-i18next';

class ProjectCard extends React.Component {
    render() {
        const {t} = this.props
        return (
            <div className={style.component}>
                <div className='card' style={{backgroundImage: `url(${this.props.image})`}}></div>
                <span className="dimmer">
                    <div className="title">{this.props.name}</div>
                    <div className="text">{this.props.children}</div>
                    <div className="buttons">
                        <div className="view-code">
                            <a href={this.props.git} target='_blank'>
                                <GitHub className="icon" size='15' /> {t('projects.view_code')}
                            </a>
                        </div>
                    </div>
                </span>
            </div>
       )
    }
}

export default translate('common')(ProjectCard);
