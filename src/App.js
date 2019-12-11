/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.scss'

import CompHeader from './components/CompHeader'
import CompList from './components/compList/'
import CompDetail from './components/compDetail/'
import CompSidebar from './components/compSidebar/'

class App extends Component{

  render(){
    return(
      <Router>
        <div className="appWrap">
          <CompHeader/>
          <Route exact path="/" component={CompList} />
          <Route exact path="/detail/:id" component={CompDetail} />
          {/* <Route exact path="/catch/" component={CompSidebar} /> */}
          <CompSidebar/>
      </div>
      </Router>
    )
  }
}

export default App;