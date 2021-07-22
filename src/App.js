import React from 'react';

import { Switch, Route } from "react-router-dom";

import "./styles/tailwind.output.css";
import LandingPage from './pages/index';
import AboutUs from './pages/about-us';

function App() {
  return (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`}>
        <LandingPage />
      </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
    </Switch>
  );
}

export default App;
