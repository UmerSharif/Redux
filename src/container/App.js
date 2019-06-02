
import React, { Component } from 'react'
import '../App.css';

import Main from '../components/Main'
import User from '../components/User'
import {connect} from 'react-redux'
import {setName} from '../actions/userAction'

 class App extends Component {
    constructor(props){
        super(props);

            this.changeUser = this.changeUser.bind(this)
    }

    changeUser(newName){
       
    }
    render() {
        return (
            <div>
                <Main changeUser = {this.changeUser} />
                <User username = {this.props.user.name}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    math: state.math,
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setName: (name) => {
        dispatch(setName(name));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
