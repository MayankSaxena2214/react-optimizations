import React, { useState } from 'react'

const HideDown = () => {
    const [minimize,setMinimize]=useState(false);
  return (
    <div className={`flex flex-col h-[90vh] ${minimize && 'hide-down'}`}>
      <div onClick={()=>setMinimize(true)} className=' flex justify-end'>X</div>
      <div className="flex-1 bg-gray-400">

      </div>
    </div>
  )
}

export default HideDown
