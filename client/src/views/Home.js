import React, { Component } from 'react';
// import { max, min, quantile } from 'd3-array';
// import axios from 'axios'
// import Dropdown from '../Shared-components/Dropdown';
// import Loading from '../Shared-components/Loading';
// import BeeswarmPlot from '../Main-components/Laptimes-BeeswarmPlot'
import BarChart from '../components/BarChart'
import TestChart from '../components/Scatter'

import * as d3 from 'd3';
import { CONFIG } from '../config.js';



// const RACES_SERVICE_URL = `${process.env.RACES_SERVICE_URL}`
// const ROUNDED_LAPTIMES_SERVICE_URL = `${process.env.ROUNDED_LAPTIMES_SERVICE_URL}`

class Main1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            bardata: [12,25,6,6,9,10],
            width: 600,
            height: 320,
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

    render() {

        const names = this.state.players.map(function (p) {return p.firstname})
        // const pts = this.state.players.map(function (p) {return p.PTS})
        const pts = this.state.players.map(post => (Math.trunc(post.PTS)))
        // this.state.bardata = this.state.players.map(function (p) {return p.PTS})
        // var result=pts.map(Number);

        
        // this.state.posts.map(post => (
        //     <li  align="start">
        //         <div>
        //             <p>{post.firstname} {post.lastname}: {post.PTS}</p>
        //             {/* <p>{post.lastname}</p>
        //             <p>{post.PTS}</p> */}
                    
        //         </div>
        //     </li>
        // ))

        return (
            // <div className="header">
            //     <div className="wrapper">
            //         Helloas12da
            //         {/* {Header} */}
            //     </div>
            //                 {/* <div>
            //         {distPlot}
            //         </div> */}
            //     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vh'}}>
            //         <h1>dsa</h1>
            //         <BarChart  data={this.state.bardata} width={this.state.width} height={this.state.height} />
            //     </div>

            // </div>


            <div className="header">
                <div className="wrapper">
                  {/* <h1>Hello</h1> */}
                    {/* {Header} */}
                </div>
                            {/* <div>this.state.bardata
                    {distPlot}this.state
                    </div> */}
                <div style={{display: 'flex',  justifyContent:'center'}}>
                
                     <BarChart  data={pts} size={[200, 200] }/>
                    
                    {/* <BarChart width={300} height={300} /> */}
                </div>
                <div>
                    {
                    this.state.players.map(post => (
                        <li  align="start">
                            <div>
                                <p>{post.firstname} {post.lastname}: {post.PTS}</p>
                                {/* <p>{post.lastname}</p>
                                <p>{post.PTS}</p> */}
                                
                            </div>
                        </li>
                    ))
                    }
                </div>

        
            </div>
        );

    }

}

export default Main1;

