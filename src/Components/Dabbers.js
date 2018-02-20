import React from 'react'

const dabbers = props => {
  return (
    <div>
      <p>{props.name} has {(Math.floor(Math.random() * 20) + 1)} DABs</p>
    </div>
  )
}

export default dabbers