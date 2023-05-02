import React from "react";
import { useState, useMemo } from "react";
function TestUseMemo() {
  const [state, setState] = useState(null);
  const chachedValue = useMemo(() => sum1to1billiontrillion(), []);
  function sum1to1billiontrillion() {
    console.log("calculation begins...");
    let sum = 0;
    const end = 1e9;
    for (let i = 0; i < end; i++) {
      sum += i;
    }
    return sum;
  }
  return (
    <>
      <h1>sum is: {state}</h1>
      <button onClick={() => setState(() => chachedValue)}>
        sum up 1 to 1 billion
      </button>
    </>
  );
}

export default TestUseMemo;
