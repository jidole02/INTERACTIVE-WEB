import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as M from './mouseStyled'
import img from './캐릭터 .png'
import img2 from './캐릭터2 .png'


class Mouse extends Component {
    state = {
        char: true
    }
    char1 = () => {
        this.setState({
            char: true
        })
    }
    char2 = () => {
        this.setState({
            char: false
        })
    }
    render() {
        function mouseLocation(e) {
            const x = e.clientX/*  - e.target.offsetTop */;
            const y = e.clientY /* - e.target.offsetTop */;
            window.circle.style.transform = "translate(" + (x / 380) + 'vw,' + (y / 180) + 'vh)';
        }
        return (
            <div>
                <M.cont>
                    <div onClick={this.char1}></div>
                    <div onClick={this.char2}></div>
                </M.cont>
                <M.menuBar>
                    <a href="https://www.facebook.com/profile.php?id=100012148756964"><i className="fab fa-facebook"></i></a>
                    <Link to="/main"><i className="far fa-times-circle"></i></Link>
                    <a href="https://github.com/jidole02/study-react/tree/master/react-project/src/components/mouse"><i className="fab fa-github"></i></a>
                </M.menuBar>
                <M.Body onMouseMove={mouseLocation}>
                    <img src={(this.state.char === true) ? img : img2} alt="" />
                    <M.Circle id="circle" />
                </M.Body>
            </div>
        )
    }
}

export default Mouse;