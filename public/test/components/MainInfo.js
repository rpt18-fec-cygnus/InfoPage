import React from 'react'; // import ReactDOM from 'react-dom';

import styled, { css } from 'styled-components';

class MainInfo extends React.Component {
  constructor(props) {
    super(props); // star system can be a part of this state

    this.state = {
      name: this.props.data.name
    }; // this.createDesc = this.createDesc.bind(this);
  }

  createDesc() {
    var descriptions = '';
    var keyDesc = this.props.data.keyDesc; //initial load props.data.keyDesc does not exist
    //handle return

    if (!keyDesc) {
      return descriptions;
    }

    descriptions = keyDesc.join(', ');
    console.log(descriptions);
    return descriptions; // keyDesc.forEach(ele => console.log(ele))
  }

  createStars() {
    var url = '';
    var rating = this.props.data.rating;

    if (!rating) {
      return url;
    } else {
      //default return to 3 stars
      url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_3.png'; //return url based on rating results between 3 to 5 starts in half star increment

      if (rating >= 3.5 && rating < 4.0) {
        url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_3_half.png';
      } else if (rating >= 4.0 && rating <= 4.5) {
        url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_4.png';
      } else if (rating >= 4.5 && rating <= 4.9) {
        url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_4_half.png';
      } else if (rating >= 4.9) {
        url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_5.png';
      }
    }

    console.log(rating);
    return url;
  }

  render() {
    const Link = ({
      className,
      children
    }) => React.createElement("a", {
      className: className
    }, children);

    const Text = text => React.createElement("span", null, text);

    const StyledText = styled(Text)`
      color = #0073bb;
      font-size: 1.5em;

    `;
    const StyledKeyDescription = styled(Link)`
      color: #0073bb;
      font-size = 3em;
    `;
    return React.createElement("div", null, React.createElement("div", null, React.createElement("h1", null, this.props.data.name)), React.createElement("div", null, React.createElement("img", {
      src: this.createStars()
    }), React.createElement("span", null, "  ", this.props.data.reviewCount, " Reviews")), React.createElement("div", null, React.createElement("span", null, this.props.data.cost, " . "), React.createElement(StyledKeyDescription, null, this.createDesc())));
  }

}

export default MainInfo;