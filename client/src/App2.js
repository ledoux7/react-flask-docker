import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg';

import BarChart from './BarChart'



class App1 extends Component {
   render() {
   return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>

        <h2 className="App-title">Chart</h2>
        <div>
          <BarChart data={[5,10,1,3]} size={[500,500]} />
        </div>
        {/* <div>
          <WorldMap data={[5,10,1,3]} size={[500,500]} />
        </div> */}
      </div>
   )
   }
}
export default App1