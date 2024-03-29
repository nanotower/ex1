import React from 'react';

const CharComponent = (props) => {
  const styleBox ={
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  }
  
  return <p style={styleBox}>{props.letter}</p>
  
}

export default CharComponent;