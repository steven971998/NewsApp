import './App.css';
import'./style.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { Component } from 'react' 
import Navbar from './components/Navbar';
import News from './components/News';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoadingBar from 'react-top-loading-bar'
import ScrollToTop from './ScrollToTop';

export default class App extends Component{
  pageSize = 15;
  apiKey="61fcae7e89fe458d83e2b30835b4e01a";

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return(
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Routes>
          <Route exact path="/"  element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="general"  pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route path="/science"  element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
          <Route path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/sports"  element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
          <Route path="/technology"  element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
          <Route path="/health"   element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
          <Route path="/business"   element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
        </Routes>
        </Router>
      
      <ScrollToTop/>
      </div>
    )
  }
}