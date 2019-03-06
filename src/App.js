import React, { Component } from 'react';
import AplicationBar from './components/AplicationBar'
import {LandingPage} from "./pages";
import {BrowserRouter,Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <AplicationBar/>
          <BrowserRouter>
              <Route path={'/'} component={LandingPage}/>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
