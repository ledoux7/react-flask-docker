import React, { Component } from 'react'
import * as d3 from 'd3';
import { CONFIG } from '../config.js';

class Main extends Component {
	constructor(props) {
	super(props);
	this.state = {
		players: [],
		pp: [],
		bardata: [12,5,6,6,9,10],
		width: 200,
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
		.then( response => response.json())
		.then(
			// handle the result
			(result) => {
				this.setState({
					isLoaded : true,
					players : result
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
	const pts = this.state.players.map(function (p) {return p.PTS})
	 
	const { width, height, data } = this.state;
	const randomData = new Array(10).fill(0).map(_ => Math.random());


   return (
		<div className="App">
			<h2>DonutChart</h2>
		   {
				this.state.posts.map(post => (
					<li  align="start">
						<div>
							<p>{post.firstname} {post.lastname}: {post.PTS}</p>
						</div>
					</li>
				))
			}
      </div>
   )
   }
}
export default Main


