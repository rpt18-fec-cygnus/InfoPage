import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.jsx'
// import mendocinoFarms from '../../mockData/createData.js'
import MainInfo from './components/MainInfo.jsx'
import Description from './components/Description.jsx'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    // console.log(window.location.pathname)
    if (window.location.pathname === '/') {
      var endpoint = '/api/restaurant/1'
      console.log(window.location.href);
    } else {
      var endpoint = `/api${window.location.pathname}`;
      console.log(window.location);
    }
    
    //get request using axios for restaurant info once component mounts

    // axios.get(`http://localhost:7000/${endpoint}`)
    axios.get(`${endpoint}`)
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
        <br></br>
        <Description desc={this.state.description} />
        {/* <div class="desc">This is where restaurant description goes!</div> */}
      </div>
      
      
    )
  }  
}

// ReactDOM.render( <App sampleData={mendocinoFarms}/>, document.getElementById('root'));
ReactDOM.render( <App />, document.getElementById('infoPage'));