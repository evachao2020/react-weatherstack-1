import React, {Component} from "react";
import axios from "axios";
import "./weather.css"

const picApiKey = 'zVzr-BoXAIonEGjzOZmSTBxZCr_d45MAHqPqERloqSE'
const picApi ='https://api.unsplash.com/search/photos'

class ListPic extends Component {

    state = {
        pics: []
    }

    componentDidMount() {
        // this.updatePic()
        this.updatePicAsync()
    }

    updatePic = () => {
        axios.get(`${picApi}`,{
            params:{
                // client_id: picApiKey,
                query: 'toronto',
                per_page: 5,
            },
            headers: {
                Authorization:`Client-ID ${picApiKey}`,
                mark2win: `32class`
            }
        })
            .then(res => {
                console.log(res)
                this.setState({pics: res.data.results})
            })

            .catch(error => console.log(error))
    }

    updatePicAsync = async () => {
       try {
           let res = await axios.get(`${picApi}`,{
               params:{
                   // client_id: picApiKey,
                   query: 'toronto',
                   per_page: 5,
                   page:2
               },
               headers: {
                   Authorization:`Client-ID ${picApiKey}`,
                   mark2win: `32class`
               }
           })
           this.setState({pics: res.data.results})
       } catch (e) {
           console.log(e)
       }
    }


    renderPicList = () => {
        this.state.pics.map((value, index) => {
            console.log(value.urls.small)
            return (
            <div key={index}>
                <img src={value?.urls?.small} alt=""/>
            </div>
            )
        })
    }

    selectPic = pic => {
        this.props.receivePic(pic)
    }

    render() {
       return (
           <div className="listPicContainer">
               {/*{this.renderPicList()}*/}
               {
                   this.state.pics.map((value, index) => {
                       console.log(value.urls.small)
                       return (
                           <div key={index} className="listPicContainerDiv" onClick={event => {this.selectPic(value.urls.small)}}>
                               <img style={{width: '100%'}} src={value?.urls?.small} alt=""/>
                           </div>
                       )
                   })
               }
           </div>
       );
    }
}

export default ListPic