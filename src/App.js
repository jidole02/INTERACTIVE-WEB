import './App.css';
import React, {Component} from 'react';
import Main from './components/main/main';
import Header from './components/header/header'
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import Speed from './components/speed/speed'
import Mouse from './components/mouse/mouse'
import Color from './components/rotate/rotate'
import Sprite from './components/sprite/sprite'

function App() {
  return (
    <div style={{overflow:"hidden"}}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/"><Header></Header><Main></Main></Route>
        <Route path="/speed"><Speed></Speed></Route>
        <Route exact path="/main"><Header></Header><Main></Main></Route>
        <Route exact path="/mouse"><Mouse></Mouse></Route>
        <Route exact path="/rotate"><Color></Color></Route>
        <Route exact path="/sprite"><Sprite></Sprite></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
