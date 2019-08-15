// export default App;
import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg';
//import BarChart from './BarChart'
import BarchartBox from './BarchartBox'


import BarChart2 from './TestChart'

import * as d3 from 'd3';
import Datapoint from "./Datapoint";
import DonutBarChart from "./DonutBarChart";


import { CONFIG } from './config.js';
//import WorldMap from './WorldMap'
import Scatterplot from './Scatterplot1'
// import { LineChart } from './LineChart';
const If = ({ c, children }) => c() ? children : null;

class App extends Component {
	constructor(props) {
	super(props);
	this.state = {
		players: [],
		bardata: [12,5,6,6,9,10],
		width: 400,
		height: 150,
		id: "root",
		data: d3.range(100).map(_ => [Math.random(), Math.random()])
	};
	}

	// componentDidMount() {
	// fetch(CONFIG.API_BASE_URL)
	// 	.then(results => results.json())
	// 	.then(players => this.setState({players: players}));
	// }
	// 	<ul>
	// 	{players}
	// </ul>

	// <h2>BarChart</h2>
	// <div>
	//   <BarChart data={[5,7,1,3]} size={[160,200]} />
	// </div>
	dateParse = d3.timeParse("%d %b %Y");

    rowParse = ({ date, time, runner }) => ({
        date: this.dateParse(date),
        time: time.split(':')
                  .map(Number)
                  .reverse()
                  .reduce((t, n, i) => i > 0 ? t+n*60**i : n),
        runner
	});
	
	// onClick = () => {
	// 	const { width, height } = this.state;
	// 	this.setState({
	// 	  width: width * 0.7,
	// 	  height: height * 0.7
	// 	});
	//   };

   
   render() {
	//const { data } = this.state;
	// const players = this.state.players.map((player, index) => <li key={index}>{player.firstname} {player.lastname}</li>);
	const { width, height, data } = this.state;
	const randomData = new Array(10).fill(0).map(_ => Math.random());



   return (
		<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Server-side rendering a D3 chart</h1>
		</header>

		<h2>BTestChart</h2>
		<svg width="800" height="800" onClick={this.onClick}>
          <Scatterplot
            x={50}
            y={50}
            width={this.state.width}
            height={this.state.height}
            data={this.state.data}
            datapoint={({ x, y }) => <Datapoint x={x} y={y} />}
          />
        </svg>
		<h2>DonutChart</h2>

		{/* <svg width="800" height="400">
			<DonutBarChart x={300} y={100} data={randomData} />
		</svg> */}


		<svg width="800" height="600">
			<BarchartBox x={30} y={200} width={500} height={300} />
		</svg>


        <div  >
			<BarChart2 data={this.state.bardata} width={this.state.width} height={this.state.height} />
        </div>
      </div>
   )
   }
}
export default App
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

