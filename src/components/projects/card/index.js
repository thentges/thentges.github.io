import React from 'react'
import style from './style.scss'
import GitHub from 'react-feather/dist/icons/github';
import { translate } from 'react-i18next';
import Tags from '../../ui/tags'

class ProjectCard extends React.Component {
    render() {
        const {t} = this.props
        return (
            <div className={style.component}>
                <div className="mobile-title">{this.props.name}</div>
                <div className="container">
                    <div className='card' style={{backgroundImage: `url(${this.props.image})`}}></div>
                    <div className="dimmer">
                        <div className="title">{this.props.name}</div>
                        <div className="text">{this.props.children}</div>
                        <div className="bottom">
                            <div className="left">
                                <Tags className="tags" list={this.props.tags} />
                            </div>
                            <div className="right">
                                <div className="view-code">
                                    <a href={this.props.git} target='_blank' className="view-code" >
                                        <GitHub className="icon" size='15' /> {t('projects.view_code')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-text">{this.props.children}</div>
                <div className='mobile-tags'>
                    <Tags list={this.props.tags} />
                </div>
                <div className="mobile-view-code">
                    <a href={this.props.git} target='_blank' className="view-code" >
                        <GitHub className="icon" size='15' /> {t('projects.view_code')}
                    </a>
                </div>
            </div>
       )
    }
}

export default translate('common')(ProjectCard);
