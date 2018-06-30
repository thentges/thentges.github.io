import React from 'react'
import style from './style.scss'
import HomeButton from './home_btn'
import { translate } from 'react-i18next';
// import Package from 'react-feather/dist/icons/package';
import Share2 from 'react-feather/dist/icons/share-2';

class HomeNav extends React.Component {
    render(){
        const {t} = this.props
        const skills_icon = <Share2 />
        // const project_icon = <Package />

        return (
            <div className={style.component}>
                <HomeButton icon={skills_icon}
                    handleClick={this.props.goTo.skills}>
                    {t('nav.skills')}
                </HomeButton>
                {/*<HomeButton icon={project_icon}>Projets</HomeButton>*/}
            </div>
        )
    }
}

export default translate('common')(HomeNav);
