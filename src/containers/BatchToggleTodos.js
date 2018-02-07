import React from 'react'
import { connect } from 'react-redux'
import { batchToggleTodos } from '../actions'

let BatchToggleTodos = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(batchToggleTodos())
        }}
      >
        <button type="submit">Toggle All</button>
      </form>
    </div>
  )
}
BatchToggleTodos = connect()(BatchToggleTodos);

export default BatchToggleTodos