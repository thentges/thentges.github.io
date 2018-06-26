import React, { Component } from 'react';
import style from './styles/app.scss'
import Home from './components/home'

class App extends Component {
  render() {
    return (
        <div className={style.component}>
            <Home />
        </div>
    );
  }
}

export default App;
