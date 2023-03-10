import React, { useState } from "react";
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator() {
    const[num, setNum]= useState(0);
    const[oldnum, setOldNum]= useState(0);
    const[operator, setOperatorInput]= useState();

    function inputNum(e) {
        var input = e.target.value
        if(num === 0) {
        setNum(input);
        } else {
        setNum(num + input);
        }    
    }
 
    function clear(e) {
        setNum(0);
    }

    function porcentage() {
        setNum(num/100);
    }

    function changeSign() {
        if(num>0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        var operatorInput=e.target.value
        setOperatorInput(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator=== "/") {
            setNum(parseFloat(oldnum / num));
        } else if (operator === "X") {
            setNum(parseFloat(oldnum * num));
        } else if (operator === "-") {
            setNum(parseFloat(oldnum - num));
        }  else if (operator === "+") {
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
}
    return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
            <Box m={12}/>
            <h1 className="result">{num}</h1>
            <button class="btn" className="red" onClick={clear}>C</button>
            <button className="color">( )</button>
            <button className="color" onClick={porcentage}>%</button>
            <button className="color" onClick={operatorHandler} value="/">/</button>
            <button onClick={inputNum} value={7}>7</button>
            <button onClick={inputNum} value={8}>8</button>
            <button onClick={inputNum} value={9}>9</button>
            <button className="color" onClick={operatorHandler} value="X">X</button>
            <button onClick={inputNum} value={4}>4</button>
            <button onClick={inputNum} value={5}>5</button>
            <button onClick={inputNum} value={6}>6</button>
            <button className="color" onClick={operatorHandler} value="-">-</button>
            <button onClick={inputNum} value={1}>1</button>
            <button onClick={inputNum} value={2}>2</button>
            <button onClick={inputNum} value={3}>3</button>
            <button className="color" onClick={operatorHandler} value="+">+</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={inputNum} value={0}>0</button>
            <button onClick={inputNum} value=".">,</button>
            <button className="green" onClick={calculate}>=</button>
        </div>
      </Container>
      </div>
    );
}
