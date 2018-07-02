import React from 'react';
import style from './style.scss'
import BlockTitle from '../ui/block_title'
import { translate } from 'react-i18next';
import ProjectCard from './card'
import test from '../../images/test.png'
import test2 from '../../images/test2.png'

class Projects extends React.Component {
    render() {
        const {t} = this.props;
        const tags = ['TEST', 'llllll', 'jjrjjr', 'jejzll', 'lkalkalkalk', 'ototototoot']
        return (
            <div className={style.component}>
                <BlockTitle color='white'>{t('projects.title')}</BlockTitle>
                <div className="cards-container">
                    <ProjectCard image={test} name={"name name !"} git="https://facebook.com"
                        tags={tags} >
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        ceci est une description du projet, oui oui oui mon pote!
                        
                    </ProjectCard>
                    <ProjectCard image={test2} name={"name name !"} git="https://facebook.com"
                        tags={tags} >
                        ceci est une description du projet, oui oui oui mon pote!
                    </ProjectCard>
                </div>
            </div>
        );
    }
}

export default translate('common')(Projects);
