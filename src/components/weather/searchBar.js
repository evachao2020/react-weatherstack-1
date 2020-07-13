import React, {Component} from "react";
import "./weather.css"

class SearchBar extends Component {

    state = {
        city: ''
}

    //單一input框,回車鍵觸發
    onSubmit = evt => {
        evt.preventDefault()   //evt(參數)阻止默認事件
        console.log(this.state.city)
        this.props.receiveCity(this.state.city)
    }

    render() {
        return (
            <div className="searchBar">
                <form onSubmit={event => this.onSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Search city</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" value={this.state.city}
                               onChange={event => this.setState({city:event.target.value})}/>   {/*雙向綁定*/}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar