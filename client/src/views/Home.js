import React, { Component } from 'react';
// import { max, min, quantile } from 'd3-array';
// import axios from 'axios'
// import Dropdown from '../Shared-components/Dropdown';
// import Loading from '../Shared-components/Loading';
// import BeeswarmPlot from '../Main-components/Laptimes-BeeswarmPlot'
import BarChart from '../BarChart'
import * as d3 from 'd3';
// import { CONFIG } from './config.js';



// const RACES_SERVICE_URL = `${process.env.RACES_SERVICE_URL}`
// const ROUNDED_LAPTIMES_SERVICE_URL = `${process.env.ROUNDED_LAPTIMES_SERVICE_URL}`

class Main1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            bardata: [12,5,6,6,9,10],
            width: 400,
            height: 150,
            id: "root",
            data: d3.range(100).map(_ => [Math.random(), Math.random()])
        };
    }

    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    Helloas12da
                    {/* {Header} */}
                </div>
                            {/* <div>
                    {distPlot}
                    </div> */}
                <div>
                    <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
                </div>

            </div>
        );

    }

}

export default Main1;

