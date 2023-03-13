import {React, useState } from "react";

const Display = props => (
    <div>{props.value}</div>
)

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )


const FunctionReturnsFunction = () => {
    console.log('Hi');
    const [value, setValue] = useState(10);
    
    const setToValue = (newValue) => {
        setValue(newValue);
    }

    return(
        <div>
            <Display value={value}/>           
            <Button  handleClick = {() => setToValue(1000)} text = "1000" />
            <Button  handleClick = {() => setToValue(100)} text = "100" />
            <Button  handleClick = {() => setToValue(value+1)} text = "increment" />


        </div>
    )
}

export default FunctionReturnsFunction;