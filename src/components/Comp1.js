import React from 'react'

const Comp1 = (props) => {
  return (
    <div>
      <h1>The value of my num is : {props.valueOfMyNum + 5}</h1>
      <h1>The value of Abc is : {props.abc}</h1>
    </div>
  );
}

export default Comp1