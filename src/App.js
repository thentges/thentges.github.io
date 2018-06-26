import React, { Component } from 'react';
import style from './styles/app.scss'

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <div>
                This is my react app on github pages ! <br />
                more content incomming...
            </div>
            <div className="test-sass">
                testing sass support, if this text is red, that means sass is working
            </div>
        </React.Fragment>
    );
  }
}

export default App;
