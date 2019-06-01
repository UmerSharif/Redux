
import React, { Component } from 'react'
import './App.css';
import Main from './components/Main'
import User from './components/User'

export default class Subapp extends Component {
    constructor(props){
        super(props);
            this.state = {
                    name : 'Umer'
            }

            this.changeUser = this.changeUser.bind(this)
    }

    changeUser(newName){
        this.setState({name: newName})
    }


    render() {
        return (
            <div className="App">
                <h2>This is sub app</h2>
                <Main changeUser = {this.changeUser} />
                <User username = {this.state.name}/>
            </div>
        )
    }
}
