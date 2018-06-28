import React from 'react';
import Card from '../../ui/card';
import junit_img from '../../../images/junit.png'
import mocha_img from '../../../images/mocha.svg'
import chai_img from '../../../images/chai.svg'
import circleci_img from '../../../images/circleci.svg'

class TestsCard extends React.Component {
    render() {
        return (
            <div className='cards-container'>
                <Card name='JUnit' image={junit_img} />
                <Card name='Mocha' image={mocha_img} />
                <Card name='Chai' image={chai_img} />
                <Card name='CircleCI' image={circleci_img} />
            </div>
        )
    }
}

export default TestsCard;
