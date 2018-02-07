import { connect } from 'react-redux'
import _Counter from '../components/Counter'

const getUncompletedTodosCount = todos => {
  return todos.filter(todo => !todo.isCompleted).length;
}

const mapStateToProps = (state, ownProps) => ({
  count: getUncompletedTodosCount(state.todos)
})

const Counter = connect(
  mapStateToProps
)(_Counter)


export default Counter