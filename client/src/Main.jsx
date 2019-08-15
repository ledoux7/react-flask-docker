import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Table from './views/Table'
// import Scatter from './components/Scatter'
import Bars from './views/Bars'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>     
      <Route path='/table' component={Table}/>
      {/* <Route path='/scatter' component={Scatter}/> */}
      <Route path='/barchart' component={Bars}/>
    </Switch>
  </main>
  
)

export default Main
