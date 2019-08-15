// export default App;
import React, { Component } from 'react'
//import BarChart from './BarChart'
//import BarchartBox from './BarchartBox'


// import BarChart2 from './TestChart'
import axios from 'axios'

import * as d3 from 'd3';
// import Datapoint from "./Datapoint";
// import DonutBarChart from "./DonutBarChart";

import BarChart from '../BarChart'

import Dropdown from '../Shared-components/Dropdown';
import Loading from '../Shared-components/Loading';
import ScatterPlot from '../Main-components/Laptimes-ScatterPlot'
import { CONFIG } from '../config.js';
//import WorldMap from './WorldMap'
// import Scatterplot from './Scatterplot1'
// import { LineChart } from './LineChart';
// const If = ({ c, children }) => c() ? children : null;

class Main extends Component {
	constructor(props) {
	super(props);
	this.state = {
		players: [],
		pp: [],
		bardata: [12,5,6,6,9,10],
		width: 400,
		height: 150,
		id: "root",
		error : null,
		isLoaded : false,
		posts : []   ,
		data: d3.range(100).map(_ => [Math.random(), Math.random()])
	};
	}

	 componentDidMount() {


	 fetch(CONFIG.API_BASE_URL)
	 	.then(results => results.json())
	 	.then(players => this.setState({players: players}));
	 
  	// const racesRequest = axios.get(CONFIG.URL)
	// 						  .then(response =>
	// 						    response.map(race => ({
	// 							    firstname : race.season,
	// 							    lastname : race.roundId,
	// 							    pts: race.PTS
	// 							}
	// 								))
	// 						    )
	// 					  .then(pp => this.setDefault(pp))


	fetch(CONFIG.API_BASE_URL)
	.then( response => response.json())
	.then(
		// handle the result
		(result) => {
			this.setState({
				isLoaded : true,
				posts : result
			});
		},
		// Handle error 
		(error) => {
			this.setState({
				isLoaded: true,
				error
			})
		},
	)
  }
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
	 const players = this.state.players.map((player, index) => <li key={index}>{player.firstname} {player.lastname}{player.PTS}</li>);
	const ptss = this.state.players.map(function (p) {return p.PTS
		
	})

	

	//  response =>
	// 	response.map(race => ({
	// 		firstname : race.season,
	// 		lastname : race.roundId,
	// 		pts: race.PTS
	// 	}
	// 		)





	 
	const { width, height, data } = this.state;
	const randomData = new Array(10).fill(0).map(_ => Math.random());



   return (
		<div className="App">
		           <h2>DonutChart</h2>
           {/* <ul>
               {players}
           </ul> */}
		   {
				this.state.posts.map(post => (
					<li  align="start">
						<div>
							<p>{post.firstname} {post.lastname}: {post.PTS}</p>
							{/* <p>{post.lastname}</p>
							<p>{post.PTS}</p> */}
							
						</div>
					</li>
				))
			}
			{/* <Dropdown
				title="Year"
				col="season"
				list={seasons}
				resetThenSet={this.resetThenSet}
			/> */}




			{/* <div>
				<BarChart data={ptss} size={[500, 500]} />
			</div> */}

      </div>
   )
   }
}
export default Main
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

