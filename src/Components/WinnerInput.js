import React from 'react'

const winnerInput = props => {
  return (
    <div>
      <input type="text" onChange={props.changed} />
    </div>
  )
}

export default winnerInput