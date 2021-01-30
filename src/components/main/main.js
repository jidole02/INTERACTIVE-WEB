import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './main.css'
import MainComp from './mainCompnent';
import * as main from './mainStyle';

let i = 0;
class Main extends Component{
    constructor(props){
        super(props);
        this.p1 = React.createRef(); // 리액트에서 DOM 에 접근하는 법
    }
    state={
        pageNum: 1
    }
    pageChange=(e)=>{
        i++;
        if(i==4){
            i=0;
        }
        this.setState({
            pageNum: i + 1
        })
    }
    pageDeacrease=(e)=>{
        if(i==0){
            i=4;
        }
        i--;
        this.setState({
            pageNum:i+1
        })
    }
    render(){
        let shot = 0;
        const style = {
             transform: 'translateX(-' + 59.1 * i + 'vw)' 
        }
        function size(){
            shot = 1;
            console.log(shot)
        }
        return(
            <div className="MainBody">
                <div className="ButtonCont">
                <i class="far fa-arrow-alt-circle-left"
                onClick={
                    this.pageDeacrease
                }
                ></i>
                <a>- { this.state.pageNum } -</a>
                <i class="far fa-arrow-alt-circle-right"
                onClick={
                    this.pageChange
                }
                ></i>
                </div>
                <div className="Body"
                style={style}
                >
                    <Link to="/speed" >
                    <main.ChoosePage onClick={size
                    } ref={this.p1} id={
                        (i==0)?"p1":"p"
                    } style={{backgroundColor:"rgb(240, 195, 49)"}}>
                        <a href="">: Regulation of speed </a>
                        <h4>Interective Web Project</h4>
                        <h1>Speed <br/>
                        Demonstrate
                        </h1> <h5>Made Jiwon</h5>   
                    </main.ChoosePage>
                    </Link>
                    <Link to="/mouse">
                    <main.ChoosePage id={
                        (i==1)?"p1":"p"
                    }style={{backgroundColor:"rgb(241, 83, 255)"}}>
                        <a href="">: Follow the mouse </a>
                        <h4>Interective Web Project</h4>
                        <h1>Mouse <br/>
                        Demonstrate
                        </h1> <h5>Made Jiwon</h5>   
                    </main.ChoosePage>
                    </Link>
                    <Link to="/rotate">
                    <main.ChoosePage id={
                        (i==2)?"p1":"p"
                    }style={{backgroundColor:"coral"}}>
                         <a href="">: Turning effect </a>
                        <h4>Interective Web Project</h4>
                        <h1>Rotate <br/>
                        Demonstrate
                        </h1> <h5>Made Jiwon</h5>   
                    </main.ChoosePage>
                    </Link>
                    <Link to="/sprite">
                    <main.ChoosePage id={
                        (i==3)?"p1":"p"
                    }style={{backgroundColor:"rgb(255, 60, 86)"}}>
                        <a href="">: Interective Web </a>
                        <h4>Interective Web Project</h4>
                        <h1>Color <br/>
                        Demonstrate
                        </h1> <h5>Made Jiwon</h5>   
                    </main.ChoosePage>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Main;