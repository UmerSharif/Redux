import {Provider} from 'react-redux'
import React, { Component } from 'react'
import store from '../store'
import '../App.css';
import App from '../container/App'

export default class mainApp extends Component {
    render() {
        return (
            <Provider store={store}>
            <div className = "App">
                <App />
            </div>
            </Provider>
        )
    }
}

