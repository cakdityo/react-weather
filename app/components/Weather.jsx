import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends React.Component {

    constructor(){
        super();

        this.openWeatherMap = new openWeatherMap;
        this.state = {
            isLoading: false
        };
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(location){
        this.setState({isLoading: true});
        this.openWeatherMap.getTemp(location).then(
            loc => this.setState({location: loc.name, temp: loc.main.temp, isLoading: false}),
            errorMessage => {
                this.setState({isLoading: false});
                alert(errorMessage);
            }
        );
    }

    render(){
        var {location, temp, isLoading} = this.state;

        function renderMessage(){
            if (isLoading){
                return (
                    <h1>Wait a sec...</h1>
                );
            } else if (temp && location) {
                return (
                    <WeatherMessage temp={temp} location={location} />
                );
            }
        }

        return (
            <div>
                <h1>Weather Component</h1>
                <WeatherForm getWeather={this.getWeather} />
                {renderMessage()}
            </div>
        );
    }
}