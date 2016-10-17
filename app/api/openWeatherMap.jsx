import axios from 'axios';

export default class openWeatherMap {

    constructor(){
        this.OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=71cfeea2132c817c502c28eecb607351&units=metric';
    }

    getTemp(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${this.OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl).then(
            res => {
                if (res.data.cod && res.data.message){
                    throw new Error(res.data.message);
                } else {
                    return res.data;
                }
            },
            res => {
                throw new Error(res);
            });
    }

}