
import React, { Component } from 'react'
import Main from './Main'
import User from './User'

export default class Subapp extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <h2>This is sub app</h2>
                <Main />
                <User />
            </div>
        )
    }
}
