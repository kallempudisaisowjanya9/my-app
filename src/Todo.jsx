import React from 'react'

function Todo(props) {
    console.log("child rerender")
  return (
    <div className='mybox'>
        <b>{props.t}</b>
    </div>
  )
}

export default React.memo(Todo)