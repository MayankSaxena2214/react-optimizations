import React, { useEffect, useState } from 'react'

const Carusel1 = () => {
    const items=[
        "Item1",
        "Item2",
        "Item3"
    ]
    const [current,setCurrent]=useState(0);
    
    const bgColor=["blue","red","green"]
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrent((current+1)%items.length);
        },3000)
        return ()=>{
            clearInterval(interval);
        }
    })
  return (
    <div>
      <div className="w-full p-5 overflow-x-hidden">
        <div key={current} style={{
            backgroundColor:bgColor[current]
        }} className={`slide-right text-white flex items-center justify-center min-h-[80vh] rounded-xl`}>
            {items[current]}
            </div>       

            <div className="flex items-center gap-3 mt-4 mx-auto justify-center">
                {
                    Array.from({length:items.length}).map((_,index)=>{
                        return <div onClick={()=>setCurrent(index)} className={`h-5 w-5 bg-purple-400 ${current==index && 'scale-150'} rounded-full`}></div>
                    })
                }
            </div>
      </div>
    </div>
  )
}

export default Carusel1
