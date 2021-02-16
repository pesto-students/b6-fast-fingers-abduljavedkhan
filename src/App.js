import React from 'react';
import './App.css';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import { Home } from './components/home/home';
import { Game } from './components/game/mainGame';
import { ROUTES } from './common/commonService';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.MAINGAME} component={Game} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
