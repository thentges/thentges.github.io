import React, { Component } from 'react';
import style from './styles/app.scss'
import {Button} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
        <div className={style.component}>
            <div>
                This is my react app on github pages ! <br />
                more content incomming...
            </div>
            <div className="test-sass">
                testing sass support, if this text is red, that means sass is working
            </div>
            <div>
                <Button primary>semantic ui theming test</Button>
                <Button secondary>semantic ui theming test</Button>
            </div>
        </div>
    );
  }
}

export default App;
