import React from 'react';
import style from './style.scss'
import BlockTitle from '../ui/block_title'
import { translate } from 'react-i18next';
import ProjectCard from './card'
import nodeApi_img from '../../images/nodeApi.png'
import portfolio_img from '../../images/portfolio.png'

class Projects extends React.Component {
    render() {
        const {t} = this.props;
        const nodeApi = {
            name: t('projects.nodeApi.title'),
            description: t('projects.nodeApi.description'),
            image: nodeApi_img,
            link: 'https://github.com/thentges/nodeApi',
            tags: [ t('tags.back'), t('tags.api'), t('tags.js'),
                t('tags.express'), t('tags.mySQL'),
                t('tags.sequelize'), t('tags.jwt'), t('tags.auth'), t('tags.bcrypt'),
                t('tags.security'), t('tags.unit_testing'), t('tags.circleci')
            ]
        }

        const portfolio = {
            name: t('projects.portfolio.title'),
            description: t('projects.portfolio.description'),
            image: portfolio_img,
            link: 'https://github.com/thentges/thentges.github.io',
            tags: [ t('tags.front'), t('tags.js'), t('tags.react'), t('tags.sass'),
                t('tags.responsive'), t('tags.ui')
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
                    <ProjectCard image={portfolio.image} name={portfolio.name} git={portfolio.link}
                        tags={portfolio.tags} >
                        {portfolio.description}
                    </ProjectCard>
                </div>
            </div>
        );
    }
}

export default translate('common')(Projects);
