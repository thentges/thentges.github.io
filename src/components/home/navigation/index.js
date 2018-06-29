import React from 'react'
import style from './style.scss'
import HomeButton from './home_btn'
import { translate } from 'react-i18next';
// import Package from 'react-feather/dist/icons/package';
import Share2 from 'react-feather/dist/icons/share-2';
import BriefCase from 'react-feather/dist/icons/briefcase';

class HomeNav extends React.Component {
    goTo(position){
        window.scrollTo(0, position);
    }

    render(){
        const {t} = this.props
        const skills_icon = <Share2 />
        const exp_icon = <BriefCase />
        // const project_icon = <Package />

        return (
            <div className={style.component}>
                <HomeButton icon={skills_icon}
                    handleClick={this.goTo.bind(this, this.props.positions.skills)}>
                    {t('nav.skills')}
                </HomeButton>
                <HomeButton icon={exp_icon}
                    handleClick={this.goTo.bind(this, this.props.positions.exp)}>
                    {t('nav.exp')}
                </HomeButton>
                {/*<HomeButton icon={project_icon}>Projets</HomeButton>*/}
            </div>
        )
    }
}

export default translate('common')(HomeNav);
