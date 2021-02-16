import React, { Component } from 'react';
import './main.css'

class MainComp extends Component {
    render() {
        return (
            <div className="mainCompBody" style={{
                backgroundColor:
                    this.props.color
            }}>
                <h4>Interactive Web Menu</h4>
                <h2>Fashion <br />
                Diagramming

                </h2>
            </div>
        )
    }
}

export default MainComp;