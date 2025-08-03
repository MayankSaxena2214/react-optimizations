import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count,setCount]=useState(0);
    const [childRender,setChildRender]=useState(true);
  return (
    <div>
      <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment </button>
        <button onClick={()=>setChildRender(!childRender)}>Render child</button>
      <Child childRender={childRender}/>
    </div>
  )
}

export default Parent
