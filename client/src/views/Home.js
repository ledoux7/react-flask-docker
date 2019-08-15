import React, { Component } from 'react';
import BarChart from '../components/BarChart'
import { CONFIG } from '../config.js';


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
        const pts = this.state.players.map(post => (Math.trunc(post.PTS)))

       
        return (
            <div className="header">
                <div className="wrapper">
                  <h1>Hello world</h1>
                    {/* {Header} */}
                </div>
              
                <div style={{display: 'flex',  justifyContent:'center'}}>
                
                     <BarChart  data={pts} size={[200, 200] }/>
                    
                    
                </div>
                <div>
                    {
                    this.state.players.map(post => (
                        <li  align="start">
                            <div>
                                <p>{post.firstname} {post.lastname}: {post.PTS}</p>                               
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

