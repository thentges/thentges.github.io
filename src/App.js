import React from 'react';
import ReactDOM from 'react-dom'
import Home from './components/home'
import style from './styles/app.scss'
import Header from './components/header'
import Skills from './components/skills'
import Experiences from './components/experiences'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current_page: null,
            goTo: {
                home: null,
                skills: null,
                exp: null
            },
            updatePositions: true,
            is_menu_showing: false,
            is_menu_showing_css: '',
            current_position: window.scrollY
        }
    }

    goTo(position){
        window.scrollTo(0, position);
    }

    getPosition(ref){
        const node = ReactDOM.findDOMNode(ref);
        return {start: node.offsetTop, end: node.offsetTop + node.offsetHeight};
    }

    updatePositions(){
        // we update the positions only if the state says we have to do it
        // this keep the positions value we had before fixing the body to desactivate scroll
        if (this.state.updatePositions) {
            const current_position = window.scrollY
            const home_positions = this.getPosition(this.refs.home_component)
            const skills_positions = this.getPosition(this.refs.skills_component)
            const exp_positions = this.getPosition(this.refs.exp_component)

            let current_page
            if (current_position < home_positions.end)
                current_page = 'home'
            else if (current_position < skills_positions.end)
                current_page = 'skills'
            else if (current_position < exp_positions.end)
                current_page = 'exp'

            this.setState({current_position, current_page, goTo: {
                home: this.goTo.bind(this, home_positions.start),
                skills: this.goTo.bind(this, skills_positions.start),
                exp: this.goTo.bind(this, exp_positions.start)
            }})
        }
    }

    componentDidMount() {
        this.updatePositions();
        window.addEventListener('scroll', this.updatePositions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updatePositions.bind(this));
    }

    toggleMenu() {
        // we do not update the positions if the menu is showing because
        // we are fixing the body position at the top to avoid scroll and that would loose where we were
        const updatePositions = this.state.is_menu_showing;
        // if we're going to show the menu
        if (!this.state.is_menu_showing){
            // we show it and stop updating positions
            this.setState({is_menu_showing: !this.state.is_menu_showing, updatePositions});
            // but we wait till the end of the menu animation to disable scrolling on the body
            setTimeout(() => {
                this.setState({is_menu_showing_css: 'disable-scroll'})
            }, 600);
        }
        // if we're going to hide the menu
        else {
            // we enable scrolling on the menu
            this.setState({is_menu_showing_css: '', is_menu_showing: !this.state.is_menu_showing, updatePositions},
            () => {
                // and then we scroll to the position we saved before disabling the menu
                this.goTo(this.state.current_position);
                // if we clicked on a menu item, the next goTo will be triggered after this one
            });
        }
    }

    render() {
        return (
            <div className={style.component}>
                <Header showNav={this.state.current_page !== 'home'}
                    currentPage={this.state.current_page} goTo={this.state.goTo}
                    isMobileMenuShowing={this.state.is_menu_showing}
                    toggleMobileMenu={this.toggleMenu.bind(this)} />
                <div className={this.state.is_menu_showing_css}>
                    <Home ref='home_component' goTo={this.state.goTo} />
                    <Skills ref='skills_component' />
                    <Experiences ref='exp_component' />
                </div>
            </div>
        );
    }
}

export default App;
