import React from 'react'

const Child = ({childRender}) => {
    console.log("Rendered again");
  return (
    <div>
      Hello I am child and rendered again
    </div>
  )
}

export default React.memo(Child)
