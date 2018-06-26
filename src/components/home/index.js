import React, { Component } from 'react';
import style from './style.scss'
import { Button } from 'semantic-ui-react'
import logo from './thentges_logo.png'

class Home extends Component {
  render() {
    return (
        <div className={style.component}>
            <div>
                <img  className="logo" src={logo} alt={'thentges avatar'} />
            </div>
            <h1>
                Hi, I'm Thibault
            </h1>
            <div>
                <Button primary>this button does nothing</Button>
                <Button secondary>neither does this one (testing colors)</Button>
            </div>
        </div>
    );
  }
}

export default Home;
