import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Todo from './components/Todo'
// import TodoList from './components/TodoList'

import AddTodo from './containers/AddTodo'
import ClearTodos from './containers/ClearTodos'
import BatchToggleTodos from './containers/BatchToggleTodos'
import ClearCompleted from './containers/ClearCompleted'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// const todos = [{ id: 1, text: 'lxm', isCompleted: false }];

const App = (props) => {
  return (
    <div>
      <AddTodo />
      <ClearTodos />
      <BatchToggleTodos />
      <VisibleTodoList />
      <ClearCompleted />
      <Footer />
    </div>
  );
}

export default App
