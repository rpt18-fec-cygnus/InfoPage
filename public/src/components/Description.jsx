import React from 'react';

const Description = (props) => {

  return (
  <div className="description">
    <p><strong>About the Business</strong></p>
    <p>{props.desc}</p>
  </div>
  )
}

export default Description;