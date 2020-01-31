import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.jsx';
import mendocinoFarms from '../../mockData/createData.js';
import MainInfo from './components/MainInfo.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //get request using axios for restaurant info once component mounts
    axios.get('/restaurantInfo').then(res => {
      this.setState(res.data);
      return res.data;
    }).catch(err => console.log(err)).then(data => console.log(data.keyDesc));
  }

  render() {
    return React.createElement("div", null, React.createElement("br", null), React.createElement(MainInfo, {
      data: this.state
    }), React.createElement("div", null, React.createElement(Button, null, React.createElement("strong", null, "Write a Review")), React.createElement(Button, {
      secondary: true
    }, "Add Photo"), React.createElement(Button, {
      secondary: true
    }, "Share"), React.createElement(Button, {
      secondary: true
    }, "Save")));
  }

}

ReactDOM.render(React.createElement(App, {
  sampleData: mendocinoFarms
}), document.getElementById('root'));