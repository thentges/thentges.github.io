import React from 'react';
import Card from '../card';
import php_img from '../../../images/php.svg'
import java_img from '../../../images/java.svg'
import js_img from '../../../images/javascript.svg'
import python_img from '../../../images/python.svg'
import html_img from '../../../images/html.png'
import css_img from '../../../images/css.svg'

class LanguagesCards extends React.Component {
    render() {
        return (
            <div className='cards-container'>
                <Card name='Java' image={java_img} />
                <Card name='PHP' image={php_img} />
                <Card name='JavaScript' image={js_img} />
                <Card name='Python' image={python_img} />
                <Card name='HTML' image={html_img} />
                <Card name='CSS' image={css_img} />
            </div>
        )
    }
}

export default LanguagesCards;
