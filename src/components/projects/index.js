import React from 'react';
import style from './style.scss'
import BlockTitle from '../ui/block_title'
import { translate } from 'react-i18next';
import ProjectCard from './card'
import nodeApi_img from '../../images/nodeApi.png'
import portfolio_img from '../../images/portfolio.png'
import recommendator_back_img from '../../images/recommendator-back.png'
import recommendator_front_img from '../../images/recommendator_front.png'
import Divider from '../ui/divider';

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

        const recommendator_back = {
            name: t('projects.recommendator_back.title'),
            description: t('projects.recommendator_back.description'),
            image: recommendator_back_img,
            link: 'https://github.com/TristanMngr/recommendator-backend',
            tags: [
                t('tags.back'), t('tags.api'), t('tags.java'), t('tags.spring'),
                t('tags.jwt'), t('tags.unit_testing'), t('tags.auth'),
                t('tags.circleci'), t('tags.security'), t('tags.bcrypt'),
                t('tags.hibernate'), t('tags.postgres')
            ]
        }

        const recommendator_front = {
            name: t('projects.recommendator_front.title'),
            description: t('projects.recommendator_front.description'),
            image: recommendator_front_img,
            link: 'https://github.com/TristanMngr/recommendator-frontend',
            tags: [
                t('tags.front'), t('tags.js'), t('tags.react'), t('tags.redux'),
                t('tags.sass'), t('tags.responsive'), t('tags.ui') ,t('tags.auth')
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
                    <Divider size='half-width' />
                    <ProjectCard image={portfolio.image} name={portfolio.name} git={portfolio.link}
                        tags={portfolio.tags} >
                        {portfolio.description}
                    </ProjectCard>
                    <Divider size='half-width' />
                    <ProjectCard image={recommendator_back.image} name={recommendator_back.name} git={recommendator_back.link}
                        tags={recommendator_back.tags} >
                        {recommendator_back.description}
                    </ProjectCard>
                    <Divider size='half-width' />
                    <ProjectCard image={recommendator_front.image} name={recommendator_front.name} git={recommendator_front.link}
                        tags={recommendator_front.tags} >
                        {recommendator_front.description}
                    </ProjectCard>
                </div>
            </div>
        );
    }
}

export default translate('common')(Projects);
