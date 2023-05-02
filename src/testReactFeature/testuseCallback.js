import React, { useState, useCallback, memo } from "react";

function ParentComponent() {
  console.log("parent rendered");
  const [value, setValue] = useState(1);
  function buttonHandler() {
    alert("Hello programmer!");
  }
  const chachedbuttonHandler = useCallback(buttonHandler, []);
  return (
    <div className="text-2xl">
      <div>ParentComponent rendered {value} times</div>
      <button type="button" onClick={() => setValue((prev) => prev + 1)}>
        Click to render parent component
      </button>
      <br />
      <ChildComponent handler={chachedbuttonHandler} theme="text-red-800" />
      <br />
      <br />
      <br />
    </div>
  );
}
const ChildComponent = memo((props) => {
  console.log("children renderd");
  return (
    <button type="button" onClick={props.handler} className={props.theme}>
      click to show greeting message
    </button>
  );
});
export default ParentComponent;
