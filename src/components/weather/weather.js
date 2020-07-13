import React from "react";
import axios from "axios";
import "./weather.css"

const apiKey = 'c581effe09ec8fb36a27620a206952e3'
const weaApi = 'http://api.weatherstack.com/current'

class Weather extends React.Component{

    state = {
        city: 'Toronto',
        weather: {}
    }

    constructor(props) {
        super(props);
        // console.log('constructor')
        // this.setState({city:this.props.city})
        setInterval( () => {
        //     this.setState({city: 'toronto'})
        },1000)
    }

    render() {
        // console.log('render')
        return (
            <div className="weatherTopDiv" style={{backgroundImage:`url(${this.props.pic})`}}>
                <div className="weatherContainer">
                    <div className="weatherColumn">
                        <h3>{this.state.weather?.request?.query}</h3>
                    </div>
                    <div className="weatherColumn">
                        <div className="weatherRow">
                            <img src={this.state.weather?.current?.weather_icons[0]} alt=""/>
                            </div>
                        <div className="weatherRow">
                            <h3>
                            {this.state.weather?.current?.temperature}°C
                            </h3>
                        </div>
                        <div className="weatherRow">
                            <div>2 3 1</div>
                            <div>2 3 2</div>
                            <div>2 3 3</div>
                        </div>
                    </div>
                    <div className="weatherColumn">
                        <div className="weatherRow">3 1</div>
                        <div className="weatherRow">3 2</div>
                        <div className="weatherRow">3 3</div>
                        <div className="weatherRow">3 4</div>
                        <div className="weatherRow">3 5</div>
                    </div>
                </div>
            </div>

        );
    }



    componentDidMount() {
        // console.log('componentDidMount')
        // this.updateWeather()
        this.updateWeatherAsync()
        //promise是一個變量(異步)
        // let isMomHappy = true
        // let promise1 = new Promise(function (resolve, reject) {
        //     if(isMomHappy) {
        //         let phone = {
        //             brand: 'Apple',
        //         }
        //         resolve(phone)
        //     }else {
        //             let reason = new Error('mom is not happy')
        //             reject(reason)
        //     }
        // })
    }

    updateWeather = () => {
        axios.get(`${weaApi}?access_key=${apiKey}&query=${this.state.city}`)
            //then,catch => 默認返回一個promise(ES2015新特性,解決異步問題)
            .then(res => {
                console.log(res)
                console.log('curry1')
                this.setState({weather: res.data})
            })
            .catch(error => console.log(error))
    }

    //用async 寫函數
    updateWeatherAsync = async () => {
        try {
            let res = await axios.get(`${weaApi}?access_key=${apiKey}&query=${this.state.city}`)
            //let res1 = await axios.get(res)
            console.log(res)
            this.setState({weather: res.data})
        } catch (e) {
            console.log(e)
        }

    }

    //普通函數前面加async既可
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('componentDidUpdate')
        if (this.props !== prevProps) {   //阻止死循環
            this.setState({city: this.props.city})
            // console.log('didUpdate --->', this.state.city)
            // this.updateWeather()
            this.updateWeatherAsync()

        }
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount')
    }

}

export default Weather