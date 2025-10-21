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
import configJson from './config/config.json';

export default class App extends Component{
  pageSize = configJson.PAGE_SIZE;
  apiKey=process.env.REACT_APP_NEWS_APIKEY
;

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
          <Route exact path="/"  element={<News  setProgress={this.setProgress} apiKey={this.apiKey}  key="general"  pageSize={this.pageSize} country={configJson.COUNTRY_CODE} category="general"/>}></Route>
          <Route path="/science"  element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={configJson.COUNTRY_CODE} category="science"/>}></Route>
          <Route path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country={configJson.COUNTRY_CODE} category="entertainment"/>}></Route>
          <Route path="/sports"  element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={configJson.COUNTRY_CODE} category="sports"/>}></Route>
          <Route path="/technology"  element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={configJson.COUNTRY_CODE} category="technology"/>}></Route>
          <Route path="/health"   element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={configJson.COUNTRY_CODE} category="health"/>}></Route>
          <Route path="/business"   element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={configJson.COUNTRY_CODE} category="business"/>}></Route>
        </Routes>
        </Router>
      
      <ScrollToTop/>
      </div>
    )
  }
}