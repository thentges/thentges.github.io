import React, { Component } from 'react';
import Home from './components/home'
import style from './styles/app.scss'
import LanguageSelector from './components/language_selector'

class App extends Component {
    render() {
        return (
            <div className={style.component}>
                <LanguageSelector />
                <Home />
            </div>
        );
    }
}

export default App;
