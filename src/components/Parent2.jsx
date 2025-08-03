import React, { useMemo, useState } from 'react'


const Parent = () => {
    const [count,setCount]=useState(0);
    const [val1,setVal1]=useState(1);
    const [val2,setVal2]=useState(2);
    const expensiveCalculation=useMemo(()=>{
        console.log("Calculating again");
        return val1+val2;
    },[val1,val2]);

    const expensiveWithoutMemo=()=>{
        console.log("INside witnout memo");
        return val1+val2;
    };
  return (
    <div>
      <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment </button>
        <button onClick={()=>setVal1(val1+1)}>Inc Val1</button>
        <button onClick={()=>setVal2(val2+1)}>Inc Val2</button>
        <h1>Expensive result is: {expensiveCalculation}</h1>
        <h1>Expensive without memo  is: {expensiveWithoutMemo()}</h1>
    </div>
  )
}

export default Parent
