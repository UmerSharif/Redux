import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Anna'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.changeUser(this.state.name)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h3>The Main Page</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-primary"
                        onClick = {this.handleClick}
                        >
                        Change Name
                        </button>
                                
                    </div>
                </div>
            </div>
        )
    }
}
