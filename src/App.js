import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from './common-service';
import  Home  from './pages/Home';
import MainGame  from './pages/MainGame';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="bg-bgimage bg-no-repeat flex flex-col min-w-screen min-h-screen ">
      <BrowserRouter>
        <Switch>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.SIGNUP} component={Signup} />
         <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={`${ROUTES.MAINGAME}/:player/:difficultyLevel`} component={MainGame} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
