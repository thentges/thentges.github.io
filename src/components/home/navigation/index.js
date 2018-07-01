import React from 'react'
import style from './style.scss'
import HomeButton from './home_btn'
import { translate } from 'react-i18next';
import Package from 'react-feather/dist/icons/package';
import Share2 from 'react-feather/dist/icons/share-2';
import BriefCase from 'react-feather/dist/icons/briefcase';

class HomeNav extends React.Component {
    render(){
        const {t} = this.props
        const skills_icon = <Share2 />
        const exp_icon = <BriefCase />
        const projects_icon = <Package />

        return (
            <div className={style.component}>
                <HomeButton icon={skills_icon}
                    handleClick={this.props.goTo.skills}>
                    {t('nav.skills')}
                </HomeButton>
                <HomeButton icon={exp_icon}
                    handleClick={this.props.goTo.exp}>
                    {t('nav.exp')}
                </HomeButton>
                <HomeButton icon={projects_icon}
                    handleClick={this.props.goTo.projects}>
                    {t('nav.projects')}
                </HomeButton>
            </div>
        )
    }
}

export default translate('common')(HomeNav);
