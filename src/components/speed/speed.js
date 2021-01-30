import React, {Component} from 'react';
import * as S from './speedStyle'
import img1 from './지구.png'
import img2 from './비행기배경 .png'
import './speed.css'
import {Link} from 'react-router-dom'

let i = 1;

class Speed extends Component{
    state={
        speedVal: 1
    }
    speedIncrese=(e)=>{
        if(i==7){
            i=0;
        }
        this.setState({
            speedVal: i+1
        })
        i++
    }
    speedDecrese=(e)=>{
        if(i==1){
            i=8;
        }
        this.setState({
            speedVal: i-1
        })
        i--;
    }
    render(){
        const planeStyle = {
            transform: 'translate(360deg)'
        }
        const speedStyle = {
            animationDuration: 20000/(i*2) +'s'
        }
        return(
            <div>
{/*                 <S.circle></S.circle> */}
                <S.menuBar>
                <a href="https://www.facebook.com/profile.php?id=100012148756964"><i class="fab fa-facebook"></i></a>
                <Link to="/main"><i class="far fa-times-circle"></i></Link>
                <a href="https://github.com/jidole02/study-react/tree/master/react-project/src/components/speed"><i class="fab fa-github"></i></a>
                </S.menuBar>
            <S.cont>
                <div onClick={this.speedIncrese}>
                <i class="far fa-arrow-alt-circle-up" ></i>
                </div>
        <a href="">{this.state.speedVal}</a>
        <div onClick={this.speedDecrese}>
        <i class="far fa-arrow-alt-circle-down" ></i>
        </div>
            </S.cont>
            <S.Body>
                <img src={img2} alt="" id="plane"
                style={speedStyle}
                />
                <img src={img1} alt="" id="earth"/>
            </S.Body>
            </div>
        )
    }
}

export default Speed;