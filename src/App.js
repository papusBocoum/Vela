import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import PersistentDrawerLeft from './components/drawer'
import Images from './components/images'
import Music from './components/music'
import Text from './components/text'


class App extends Component {
  render() {
    return (

     

     
      <Router>
         <div>
      
      <Link to="/images">Images</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/text">Text</Link>
      <Link to="/audio">audio</Link>

      <Switch>
        <Route path="/videos" component={PersistentDrawerLeft} />
        <Route path="/images" component={Images} />
        <Route path="/audio" component={Music} />
        <Route path="/text" component={Text} />

        </Switch>
        </div>

      </Router>

       
      
    );
  }
}

export default App;
