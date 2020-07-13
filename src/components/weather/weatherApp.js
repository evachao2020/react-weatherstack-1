import React from "react";
import Weather from "./weather";
import SearchBar from "./searchBar";
import ListPic from "./listPic";



class WeatherApp extends React.Component{

    state = {
        name : '',
        picture: ''
    }

    constructor() {
        super();
    }

    receiveCity = evt => {
        console.log(evt)
        this.setState({name: evt})
    }

    render() {
        return (
            <div className="container">
                <SearchBar receiveCity={event => this.receiveCity(event)}></SearchBar>   {/*子傳父,定義一個函數receiveCity綁定, 在由父傳到另一個兒子Weather*/}
                <Weather city={this.state.name} pic={this.state.picture}></Weather>   {/*父傳子,直接綁定*/}
                <ListPic receivePic={event => this.setState({picture:event})}></ListPic>
            </div>
        );
    }
}

export default WeatherApp