import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/Navbar'
import HomeView from './components/HomeView'
import ContactMe from './components/ContactMe'




class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={ HomeView }/>
              <Route exact path="/ContactMe" component={ ContactMe }/>
            </Switch>
            </div>
          </Router>
        
      </div>
    );
  }
}




export default App;






