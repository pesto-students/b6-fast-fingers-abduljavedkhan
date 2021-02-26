import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from './common-service';
import  Home  from './pages/Home';
import MainGame  from './pages/MainGame';

function App() {
  return (
    <div className="bg-bgimage bg-no-repeat flex flex-col min-w-screen min-h-screen ">
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={`${ROUTES.MAINGAME}/:player/:difficultyLevel`} component={MainGame} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
