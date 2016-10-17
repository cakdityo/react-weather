import React from 'react';

export default class WeatherForm extends React.Component {

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        var location = this.refs.location.value;

        if(location.length > 0){
            this.refs.location.value = '';
            this.props.getWeather(location);
        }

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" ref="location" placeholder="Enter a location"/>
                </div>
                <button>Get Weather!</button>
            </form>
        );
    }
}