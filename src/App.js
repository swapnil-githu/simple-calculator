//import React from "react";
import "./App.css";
import React, { useState } from "react";

function Calculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");

  const validateInput = () => {
    if (input1 === "" || input2 === "") {
      setError("Both input fields are required");
      return true;
    }
    else{
      setError("")
      
    }
    if (input1 !== "" || input2 !== "") {
      setError1("success");
       return true;
    }
    else{
      setError1("")
      
    }
    if (isNaN(input1) || isNaN(input2)) {
      setError("Input fields must be numbers");
      return false;
    }
    setError("");
    return true;
  };

  const handleAddition = () => {
    if (validateInput()) {
      setResult(parseFloat(input1) + parseFloat(input2));
    }
  };

  const handleSubtraction = () => {
    if (validateInput()) {
      setResult(parseFloat(input1) - parseFloat(input2));
    }
  };

  const handleMultiplication = () => {
    if (validateInput()) {
      setResult(parseFloat(input1) * parseFloat(input2));
    }
  };

  const handleDivision = () => {
    if (validateInput()) {
      if (input2 !== 0) {
        setResult(parseFloat(input1) / parseFloat(input2));
      } else {
        setError("Cannot divide by zero");
      }
    }
  };

  return (
     <div className="container">
    <div className="calculator">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Num1"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Num2"
      />
      <div >
        <button className="button-style" onClick={handleAddition}>+</button>
        <button className="button-style" onClick={handleSubtraction}>-</button>
        <button className="button-style" onClick={handleMultiplication}>x</button>
        <button className="button-style" onClick={handleDivision}>÷</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {error1 && <p style={{ color: "green" }}>{error1}</p>}

      {/* {result && <p>Result: {result}</p>} */}
      {result && <p style={{ color: "#FFFFFF" }}>{result}</p>}

    </div>
    </div>
  );
}

export default Calculator;


