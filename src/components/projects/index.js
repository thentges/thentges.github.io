import React from 'react';
import style from './style.scss'
import BlockTitle from '../ui/block_title'
import { translate } from 'react-i18next';
import ProjectCard from './card'
import nodeApi_img from '../../images/nodeApi.png'

class Projects extends React.Component {
    render() {
        const {t} = this.props;
        const nodeApi = {
            name: t('projects.nodeApi.title'),
            description: t('projects.nodeApi.description'),
            image: nodeApi_img,
            link: 'https://github.com/thentges/nodeApi',
            tags: [ t('tags.back'), t('tags.api'), t('tags.js'), t('tags.mySQL'),
                t('tags.sequelize'), t('tags.jwt'), t('tags.auth'), t('tags.bcrypt'),
                t('tags.security'), t('tags.unit_testing'), t('tags.circleci')
            ]
        }
        return (
            <div className={style.component}>
                <BlockTitle color='white'>{t('projects.title')}</BlockTitle>
                <div className="cards-container">
                    <ProjectCard image={nodeApi.image} name={nodeApi.name} git={nodeApi.link}
                        tags={nodeApi.tags} >
                        {nodeApi.description}
                    </ProjectCard>
                </div>
            </div>
        );
    }
}

export default translate('common')(Projects);
