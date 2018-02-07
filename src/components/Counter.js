import React from 'react'

const Counter = props => {
  const { count } = props;
  return (
    <span>{count} item{count > 1 ? 's' : null} left</span>
  )
}

export default Counter