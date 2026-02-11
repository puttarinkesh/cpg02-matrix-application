import React, { Component } from 'react';
import './HelloWorld.css';


class HelloWorld extends Component {
    constructor (props) {
        super (props);
        this.state = { greeting: 'Hello' };
        this.students = this.students.bind(this);
        this.professionals = this.professionals.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }
    students() {
        this.setState({ greeting: 'You are Learning the Most Demanding Skills on the market now' });
    }
    professionals() {
        this.setState({ greeting: 'Congratulations Soon you be placed in a top DevOps organization by your effort' });
    }
    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
    render () {
        return (
            <div className="HelloWorld">
            {this.state.greeting} {this.props.name}!
            <br/>
            <button onClick={this.students}><span role="img" aria-label="Spain">🥘🥘🥘</span> students!</button>
            <button onClick={this.professionals}><span role="img" aria-label="Lebanon">🌲🌲🌲</span> professionals!</button>
            <br />
            <button onClick={this.removeGreeting}><span role="img" aria-label="Delete" title="Delete">✖️</span></button>
            </div>
        );
    }
}

/* const HelloWorld = props => {
  return (<div className="HelloWorld">Hello {props.name}!</div>);
}; */

export default HelloWorld;