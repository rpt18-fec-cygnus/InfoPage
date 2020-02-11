import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.jsx'
// import mendocinoFarms from '../../mockData/createData.js'
import MainInfo from './components/MainInfo.jsx'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    // var url = document.URL;
    // console.log(window.location.pathname)
    //split url by key restaurant
    //if split url length is 1 (didn't split) then get restaurant id 1
    if (window.location.pathname === '/') {
      var endpoint = '/restaurant/1'
    } else {
      var endpoint = window.location.pathname;
    }
    
    //get request using axios for restaurant info once component mounts
    // axios.get('/restaurantInfo')

    // const urlParams = new URLSearchParams(this.props.location.search);
    // console.log('this is urlParams: ', urlParams)
    
    axios.get(`http://localhost:7000${endpoint}`)
      .then((res) => {
        this.setState(res.data)
        return res.data
      })
      .catch(err => console.log(err))
      // .then((data) => console.log(data.keyDesc))
  }

  render() {
    return (
      <div> 
        {/* App Components go here! Show info for {this.props.sampleData.name} */}
        <br></br>
        {/* <MainInfo data={this.props.sampleData} /> */}
        <MainInfo data={this.state} />
        <div>
          <Button><strong>Write a Review</strong></Button>
          <Button secondary>Add Photo</Button>
          <Button secondary>Share</Button>
          <Button secondary>Save</Button>
        </div>
      </div>
      
    )
  }  
}

// ReactDOM.render( <App sampleData={mendocinoFarms}/>, document.getElementById('root'));
ReactDOM.render( <App />, document.getElementById('root'));