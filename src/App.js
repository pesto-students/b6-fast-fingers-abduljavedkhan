import React from 'react';
import './App.css';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import { Home } from './components/home/home';
import { Game } from './components/game/GameArea/game-area';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
      </Switch>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;
