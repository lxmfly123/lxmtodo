import React from 'react'
import { connect } from 'react-redux'
import { toogleEditing } from '../actions'

let EditTodo = ({ dispatch }) => {
  let input;
  return (
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(toogleEditing(, input.value))
          input.value = ''
        }}
      >
        <input ref={node => {input = node}} />
        {/* <button type="submit">Add Todo</button> */}
      </form>
  )
}
EditTodo = connect()(EditTodo);

export default EditTodo