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
            show_navigation_on_header: false
        }
    }

    getHomePosition(){
        const home_node = ReactDOM.findDOMNode(this.refs.home_component);
        const home_position = home_node.getBoundingClientRect();
        return home_position.height;
    }

    componentDidMount() {
        const home_position = this.getHomePosition();
        this.setState({
            show_navigation_on_header: home_position < window.scrollY
        });
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(e) {
        const position = window.scrollY;
        const home_position = this.getHomePosition();
        console.log("pos" + position);
        // console.log(home_position);
        if (position >= home_position) {
            this.setState({show_navigation_on_header: true});
        }
        else if (position < home_position)
            this.setState({show_navigation_on_header: false});
    }

    render() {

        return (
            <div className={style.component} ref='app' >
                <Header showNav={this.state.show_navigation_on_header} />
                <Home ref='home_component' />
                <Skills />
            </div>
        );
    }
}

export default App;
