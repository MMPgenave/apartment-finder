import React from 'react'
import { useUiContext } from '../context/UiContext'
function Products() {
  const {state,dispatch}=useUiContext()
  return (
    <div>{state.products.map(item => {
      return (<div key={item.id}>
        {item.type}
      </div>);
      })}</div>
  )
}

export default Products