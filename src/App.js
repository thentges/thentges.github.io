import React from 'react';
import ReactDOM from 'react-dom'
import Home from './components/home'
import style from './styles/app.scss'
import Header from './components/header'
import Skills from './components/skills'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current_page: null,
            start_positions: {
                home: 0,
                skills: 0
            }
        }
    }

    getPosition(ref){
        const node = ReactDOM.findDOMNode(ref);
        return {start: node.offsetTop, end: node.offsetTop + node.offsetHeight};
    }

    updatePositions(){
        console.log("SCROLLED");
        const current_position = window.scrollY
        const home_positions = this.getPosition(this.refs.home_component)
        const skills_positions = this.getPosition(this.refs.skills_component)

        let current_page
        if (current_position < home_positions.end)
            current_page = 'home'
        else if (current_position < skills_positions.end)
            current_page = 'skills'

        this.setState({current_page, start_positions: {
            home: home_positions.start,
            skills: skills_positions.start
        }})
    }

    componentDidMount() {
        this.updatePositions();
        window.addEventListener('scroll', this.updatePositions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updatePositions.bind(this));
    }

    render() {
        return (
            <div className={style.component}>
                <Header showNav={this.state.current_page !== 'home'}
                    currentPage={this.state.current_page} positions={this.state.start_positions} />
                <Home ref='home_component' positions={this.state.start_positions} />
                <Skills ref='skills_component' />
            </div>
        );
    }
}

export default App;
