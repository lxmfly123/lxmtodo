import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}
    >
      <input 
        className='new-todo'
        ref={node => {input = node}} 
        placeholder='What needs to be done?'
      />
    </form>
  )
}
AddTodo = connect()(AddTodo);

export default AddTodo