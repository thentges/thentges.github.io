import React from 'react';
import Card from '../../ui/card';
import spring_img from '../../../images/spring.svg'
import symfony_img from '../../../images/symfony.svg'
import node_img from '../../../images/nodejs.svg'
import express_img from '../../../images/express.svg'

class BackEndCards extends React.Component {
    render() {
        return (
            <div className='cards-container'>
                <Card name='Spring' image={spring_img} />
                <Card name='Symfony' image={symfony_img} />
                <Card name='Node.js' image={node_img} />
                <Card name='Express.js' image={express_img} />
            </div>
        )
    }
}

export default BackEndCards;
