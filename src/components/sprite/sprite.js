import React, {Component, useState} from 'react';
import * as sprite from './spriteStyle'
import {Link} from 'react-router-dom';

class Circle extends Component{
    render(){
        return(
            <sprite.circle style={{transform: 'rotate('+ this.props.rotateValue + 'deg)'}}>
            <div style={{backgroundColor: 'rgb(180,' + this.props.color1 + ',' + this.props.color+ ' )'}}></div>
            </sprite.circle>
        )
    }
}

const Sprite=()=>{
    const [rotate, rotateVal] = useState('');
    const circleSpread=()=>{
        console.log(rotate);
        rotateVal(20);
        }
        const returnRotate=()=>{
            rotateVal(0);
        }
        const roateNum = []; 
        for(let i=0;i<18;i++){
         roateNum[i] = i;   
        }
        const rotateApear = roateNum.map((e)=>(<Circle rotateValue={rotate*e} color={rotate*e} color1={rotate*e/3}></Circle>)) // map 함수를 통한 다중 컴포넌트 출력
    return(
        <>
            <sprite.menuBar>
                <a href="https://www.facebook.com/profile.php?id=100012148756964"><i class="fab fa-facebook"></i></a>
                <Link to="/main"><i class="far fa-times-circle"></i></Link>
                <a href="https://github.com/jidole02/study-react/tree/master/react-project/src/components/sprite"><i class="fab fa-github"></i></a>
            </sprite.menuBar>
            <sprite.cont>
                <i onClick={circleSpread}>Open</i>
                <i onClick={returnRotate}>Close</i>
            </sprite.cont>
        <sprite.Body>
            {rotateApear}
        </sprite.Body>
        </>
    )
}

export default Sprite;