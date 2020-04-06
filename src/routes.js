import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import SearchPage from './pages/SearchPage/SearchPage';
import UserPage from './pages/UserPage/UserPage';
import Error404 from './pages/ErrorPage/404';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search/:username">
          <UserPage />
        </Route>
        <Route path="/">
          <SearchPage />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
