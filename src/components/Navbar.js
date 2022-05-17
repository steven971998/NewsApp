import React, { Component } from 'react'
import { Link } from "react-router-dom";


//Date and Time
function TimesNow() {
  document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
}
setInterval(TimesNow, 1000)

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="Navbar ">
          <nav>
            <ul>
              <li >
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/health">Health</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/technology">Technology </Link>
              </li>
            </ul>
            <div className="time">
          <p id='date'>{new Date().toLocaleDateString()} | </p>  <p id='time'> {TimesNow}</p>
        </div>
          </nav>
        </div>
      </div>
    )
  }
}
