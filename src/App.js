import React from 'react';
import ReactDOM from 'react-dom'
import Home from './components/home'
import style from './styles/app.scss'
import Header from './components/header'
import Skills from './components/skills'
import Experiences from './components/experiences'
import Projects from './components/projects'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current_page: null,
            goTo: {
                home: null,
                skills: null,
                exp: null,
                projects: null
            },
            updatePositions: true,
            is_menu_showing: false,
            is_body_scrollable: true,
            current_position: window.scrollY,
            component_positions: {
                home: 0,
                skills: 0,
                exp: 0,
                projects: 0
            }
        }
    }

    goTo(position){
        window.scrollTo(0, position);
    }

    getPosition(ref){
        const node = ReactDOM.findDOMNode(ref);
        return {start: node.offsetTop, end: node.offsetTop + node.offsetHeight};
    }

    updateComponentsPositions() {
        const home_positions = this.getPosition(this.refs.home_component)
        const skills_positions = this.getPosition(this.refs.skills_component)
        const exp_positions = this.getPosition(this.refs.exp_component)
        const projects_positions = this.getPosition(this.refs.projects_component)
        this.setState({
            goTo: {
                home: this.goTo.bind(this, home_positions.start),
                skills: this.goTo.bind(this, skills_positions.start),
                exp: this.goTo.bind(this, exp_positions.start),
                projects: this.goTo.bind(this, projects_positions.start)
            },
            component_positions: {
                home: home_positions.end,
                skills: skills_positions.end,
                exp: exp_positions.end,
                projects: projects_positions.end
            }
        })
    }

    updateUserPositions() {
        if (this.state.updatePositions || window.innerWidth > 760) {
            const current_position = window.scrollY
            let current_page
            if (current_position === 0 || current_position < this.state.component_positions.home)
                current_page = 'home'
            else if (current_position < this.state.component_positions.skills)
                current_page = 'skills'
            else if (current_position < this.state.component_positions.exp)
                current_page = 'exp'
            else if (current_position < this.state.component_positions.projects)
                current_page = 'projects'
            this.setState({current_page, current_position})
        }
    }

    componentDidMount() {
        this.updateUserPositions();
        this.updateComponentsPositions();
        window.addEventListener('resize', this.updateComponentsPositions.bind(this));
        window.addEventListener('scroll', this.updateUserPositions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateUserPositions.bind(this));
        window.removeEventListener('resize', this.updateComponentsPositions.bind(this));
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
                this.setState({is_body_scrollable: false})
            }, 600);
        }
        // if we're going to hide the menu
        else {
            // we enable scrolling on the menu
            this.setState({
                is_body_scrollable:true,
                is_menu_showing: !this.state.is_menu_showing,
                updatePositions
            },
            () => {
                // and then we scroll to the position we saved before disabling the menu
                this.goTo(this.state.current_position);
                // if we clicked on a menu item, the next goTo will be triggered after this one
            });
        }
    }

    render() {
        const is_body_scrollable_css = this.state.is_body_scrollable ? '' : 'disable-scroll';

        return (
            <div className={style.component}>
                <Header showNav={this.state.current_page !== 'home'}
                    currentPage={this.state.current_page} goTo={this.state.goTo}
                    isMobileMenuShowing={this.state.is_menu_showing}
                    toggleMobileMenu={this.toggleMenu.bind(this)} />
                <div className={is_body_scrollable_css}>
                    <Home ref='home_component' goTo={this.state.goTo} />
                    <Skills ref='skills_component' />
                    <Experiences ref='exp_component' />
                    <Projects ref='projects_component' />
                </div>
            </div>
        );
    }
}

export default App;
