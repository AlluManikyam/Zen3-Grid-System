import React from 'react';

function Input(props) {
    console.log("propssss",props)
  return (
   <> <input placeholder={props.placeholder} type="text" onChange={(e)=>{props.inputOnChange(e.target.value)}}/></>
  );
}

export default Input;