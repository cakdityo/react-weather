import React from 'react';

export default class WeatherMessage extends React.Component {
    render(){
        var {temp, location} = this.props;

        return (
            <h1>It's {temp} celcius in {location}</h1>
        );
    }
}