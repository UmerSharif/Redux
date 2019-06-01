
import React, { Component } from 'react'
import Main from './Main'
import User from './User'

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
            <div>
                <h2>This is sub app</h2>
                <Main changeUser = {this.changeUser} />
                <User username = {this.state.name}/>
            </div>
        )
    }
}
