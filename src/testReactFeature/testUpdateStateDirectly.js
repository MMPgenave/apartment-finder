import React,{useState} from 'react'

function TestUpdateStateDirectly() {
    let [value,setValue]=useState(9);
    const handler=()=>{
        value=value+10;
       alert(value);
    }
  return (<>
    <div>value:{value}</div>
    <button type='button' onClick={handler}>click</button>
    </>
  )
}

export default TestUpdateStateDirectly