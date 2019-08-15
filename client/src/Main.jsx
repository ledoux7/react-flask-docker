import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainDashboard from './views/MainDashboard'
import LaptimesScatter from './views/LaptimesScatter'
import ResultsBar from './views/ResultsBar'
import Home from './views/Home'
import Table from './views/Table'
import Scatter from './views/Scatter'
import Bars from './views/Bars'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>

      <Route path='/laptimes-beeswarmplot' component={MainDashboard}/>
      <Route path='/laptimes-scatterplot' component={LaptimesScatter}/>
      <Route path='/results-barchart' component={ResultsBar}/>
     
      <Route path='/table' component={Table}/>
      <Route path='/scatter' component={Scatter}/>
      <Route path='/barchart' component={Bars}/>
    </Switch>
  </main>
  
)

export default Main
