import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';
import Header from './Components/Header/Header';

function App() {
  return (
    <div style={{backgroundColor:'lightgrey'}}>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path = "/about/:postId">
            <PostDetail/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
