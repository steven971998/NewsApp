import './App.css';
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


export default class App extends Component{
  pageSize = 15;
  render() {
    return(
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={10}
      />
        <Routes>
        <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route> 
        </Routes>
        </Router>
      </div>
    )
  }
}


////////////////////////////////// top scroll ///////////////
// import React from 'react';

// var btnScrollToTop=document.documentElement
// // var rootElement = document.documentElement
// //  btnScrollToTop.document.getElementById("btnScrollToTop")
// const ScrollToTop = () => {
    
//     window.onload = () => {
//         btnScrollToTop.style.visibility = "hidden";
//         btnScrollToTop.style.opacity = 0;
//        }
//        // If the page is scrolled more than 200px,
//        // display the scroll-to-top button
//        // Otherwise keep the button hidden
//        window.onscroll = () => {
//         if (window.scrollY > 200) {
//             btnScrollToTop.style.visibility = "visible";
//             btnScrollToTop.style.opacity = 1;
//         } else {
//             btnScrollToTop.style.visibility = "hidden";
//             btnScrollToTop.style.opacity = 0;
//         }
//        };
       
//     btnScrollToTop.scrollTo({
//     top:0,
//     behaviour:"smooth"
// })

// // const handleScroll = ()=>{
// //     var scrollTotal=rootElement.scrollHeight - rootElement.clientHeight
// //     if ((rootElement.scrollTop/scrollTotal)>0.80){
// //         btnScrollToTop.classList.add("showBtn")
// //     } else {
// //         btnScrollToTop.classList.remove("showBtn")
// //     }
    

    
// return (
//     <>
//     <div className='btnScrollToTop' id='scrollTop'>
//     <button onClick={ScrollToTop}  title="Go to top" id='btnScrollToTop'>
//                 <i className='material-icons'>arrow_upward</i>
//             </button>
    
//     </div>
//     </>
//   )
// }
// btnScrollToTop.addEventListener("click",ScrollToTop)
// // document.addEventListener("scroll",handleScroll)


// // const ScrollToTop = () => {
// //     btnScrollToTop.scrollTo({
// //     top:0,
// //     behaviour:"smooth"
// // })

// export default ScrollToTop

///////////