import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'


class WeatherList extends Component {


    renderWeather(cityData){
const temps = cityData.list.map(weather => weather.main.temp);
const pressure = cityData.list.map(weather => weather.main.pressure);
const humidity = cityData.list.map(weather => weather.main.humidity);
return(
<tr key = {cityData.city.name}>
<td>{cityData.city.name}</td>
<td> <Chart data= {temps} color = "orange"/></td>
<td> <Chart data= {pressure} color = "green"/></td>
<td> <Chart data= {humidity} color = "red"/></td>
</tr>

)
    }
    render() {
        return(
<table className="table table-hover">
                <thread>
                    <tr>
                        <th> City </th>
                        <th> Temperature </th>
                        <th> Pressure </th>
                        <th> Humidity </th>
                    </tr>
                </thread>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );

    }

}

function mapStateToProps({weather}){ // const weather = state.weather.

    return {weather}; // {weather : state.weather}
}

export default connect (mapStateToProps)(WeatherList);