import React, { Component } from 'react';
import { Home } from './components/Home';

import './custom.css'
import {Routes} from "react-router";
import {Route} from "react-router-dom";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
          <Routes>
            <Route  path='/' element={<Home />} />
          </Routes>
    );
  }
}
