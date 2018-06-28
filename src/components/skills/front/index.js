import React from 'react';
import Card from '../../ui/card';
import angular_img from '../../../images/angular.svg'
import react_img from '../../../images/react.svg'
import redux_img from '../../../images/redux.svg'
import sass_img from '../../../images/sass.svg'

class FrontEndCards extends React.Component {
    render() {
        return (
            <div className='cards-container'>
                <Card name='AngularJS' image={angular_img} />
                <Card name='React' image={react_img} />
                <Card name='Redux' image={redux_img} />
                <Card name='Sass' image={sass_img} />
            </div>
        )
    }
}

export default FrontEndCards;
