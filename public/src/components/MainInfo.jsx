import React from 'react';
// import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';

class MainInfo extends React.Component {
  constructor(props) {
    super(props);

    // star system can be a part of this state
    this.state = {
      name: this.props.data.name
    }
    // this.createDesc = this.createDesc.bind(this);
  }

  createDesc() {
    var descriptions = '';
    var keyDesc = this.props.data.keyDesc;
    //initial load props.data.keyDesc does not exist
    //handle return
    if (!keyDesc) {
      return descriptions;
    }
    descriptions = keyDesc.join(', ')
    console.log(descriptions)
    return descriptions
    // keyDesc.forEach(ele => console.log(ele))
  }

  createStars() {
    var url = '';
    var rating = this.props.data.rating;
    if(!rating) {
      return url;
    } else {
      //default return to 3 stars
      url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_3.png'
      //return url based on rating results between 3 to 5 starts in half star increment
      if (rating >= 3.5 && rating < 4.0) {
        url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_3_half.png'
      } else if (rating >= 4.0 && rating <= 4.5) {
        url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_4.png'
      } else if (rating >= 4.5 && rating <= 4.9) {
        url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_4_half.png'
      } else if (rating >= 4.9) {
        url = 'https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_5.png'
      }
    }
    console.log(rating)
    return url;
  }

  render() {

    const Link = ({ className, children }) => (
      <a className={className}>
        {children}
      </a>
    );
    
    const Text = (text) => (
      <span>{text}</span>
    );

    const StyledText = styled(Text)`
      color = #0073bb;
      font-size: 1.5em;

    `;


    const StyledKeyDescription = styled(Link)`
      color: #0073bb;
      font-size = 3em;
    `;

    return (
      <div> 
        <div>
          <h1>{this.props.data.name}</h1>
        </div>
        <div>
          {/* make image source dynamic */}
          {/* <img src="https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_3.png"></img><span>  {this.props.data.reviewCount} Reviews</span> */}
          {/* <img src="https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_5%402x.png"></img><span>  {this.props.data.reviewCount} Reviews</span> */}
          <img className="stars" src={this.createStars()}></img><span>  {this.props.data.reviewCount} Reviews</span>
          {/* <h4>STAR RATING {this.props.data.rating} {this.props.data.reviewCount} Reviews</h4> */}
        </div>
        <div>
          <span>{this.props.data.cost} . </span><StyledKeyDescription>{this.createDesc()}</StyledKeyDescription>
        </div>
      </div>
      
    )
  }  
}

export default MainInfo;