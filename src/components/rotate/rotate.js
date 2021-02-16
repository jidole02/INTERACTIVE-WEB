import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import *  as C from './rotateStyle'
import './rotate.css'
import joker from './스페이드 .png'
import spade from './스페이드A .png'

class Color extends Component{
    state ={
        img: 'joker'
    }
    imgC1=()=>{
        this.setState({
            img: 'spade'
        })
    }
    imgC2=()=>{
        this.setState({
            img: 'joker'
        })
    }
    imgC3=()=>{
        this.setState({
            img: 'king'
        })
    }
    render(){
        return(
            <div style={{overflow:'hidden'}}>
                <C.menuBar>
                <a href="https://www.facebook.com/profile.php?id=100012148756964"><i className="fab fa-facebook"></i></a>
                <Link to="/main"><i className="far fa-times-circle"></i></Link>
                <a href="https://github.com/jidole02/study-react/tree/master/react-project/src/components/rotate"><i className="fab fa-github"></i></a>
                </C.menuBar>
                <C.cont>
                    <div onClick={this.imgC1}>A</div>
                    <div onClick={this.imgC2}>J</div>
                    <div onClick={this.imgC3}>K</div>
                    
                </C.cont>
                <C.Body> 
                    <div className={this.state.img}></div>
                    <div className={this.state.img}></div>
                    <div className={this.state.img}></div>
                    <div className={this.state.img}></div>
                </C.Body>
            </div>
        )
    }
}

export default Color;