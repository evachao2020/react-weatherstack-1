import React from "react";
import reactDOM from "react-dom";
import WeatherApp from "./components/weather/weatherApp";
import {ShowEx} from "./components/mapEx";

class Index extends React.Component {
    render() {
        return (
            <div>
                <ShowEx/>
                <WeatherApp></WeatherApp>
            </div>
        );
    }
}
reactDOM.render(<Index></Index>, document.getElementById('root'))