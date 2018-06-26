import React, { Component } from 'react';
import Home from './components/home'
import './styles/semantic.scss'
import style from './styles/app.scss'

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
