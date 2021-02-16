import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './main.css'
import * as main from './mainStyle';

let i = 0;
class Main extends Component {
    state = {
        pageNum: 1
    }
    pageChange = () => {
        i++;
        if (i === 4) {
            i = 0;
        }
        this.setState({
            pageNum: i + 1
        })
    }
    pageDeacrease = () => {
        if (i === 0) {
            i = 4;
        }
        i--;
        this.setState({
            pageNum: i + 1
        })
    }
    render() {
        let shot = 0;
        const style = {
            transform: 'translateX(-' + 59.1 * i + 'vw)'
        }
        function size() {
            shot = 1;
            console.log(shot)
        }
        return (
            <div className="MainBody">
                <div className="ButtonCont">
                    <i className="far fa-arrow-alt-circle-left"
                        onClick={
                            this.pageDeacrease
                        }
                    ></i>
                    <a href="/">- {this.state.pageNum} -</a>
                    <i className="far fa-arrow-alt-circle-right"
                        onClick={
                            this.pageChange
                        }
                    ></i>
                </div>
                <div className="Body"
                    style={style}
                >
                    <Link to="/speed" >
                        <main.ChoosePage 
                        onClick={size}
                        id={
                            (i === 0) ? "p1" : "p"
                        } style={{ backgroundColor: "rgb(240, 195, 49)" }}>
                            <p>: Regulation of speed </p>
                            <h4>Interective Web Project</h4>
                            <h1>Speed <br />
                        Demonstrate
                        </h1> <h5>Made Jiwon</h5>
                        </main.ChoosePage>
                    </Link>
                    <Link to="/mouse">
                        <main.ChoosePage id={
                            (i === 1) ? "p1" : "p"
                        } style={{ backgroundColor: "rgb(241, 83, 255)" }}>
                            <p>: Follow the mouse </p>
                            <h4>Interective Web Project</h4>
                            <h1>Mouse <br />
                        Demonstrate
                        </h1> <h5>Made Jiwon</h5>
                        </main.ChoosePage>
                    </Link>
                    <Link to="/rotate">
                        <main.ChoosePage id={
                            (i === 2) ? "p1" : "p"
                        } style={{ backgroundColor: "coral" }}>
                            <p>: Turning effect </p>
                            <h4>Interective Web Project</h4>
                            <h1>Rotate <br />
                        Demonstrate
                        </h1> <h5>Made Jiwon</h5>
                        </main.ChoosePage>
                    </Link>
                    <Link to="/sprite">
                        <main.ChoosePage id={
                            (i === 3) ? "p1" : "p"
                        } style={{ backgroundColor: "rgb(255, 60, 86)" }}>
                            <p>: Interective Web </p>
                            <h4>Interective Web Project</h4>
                            <h1>Color <br />
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