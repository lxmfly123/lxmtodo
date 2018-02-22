import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Todo from './components/Todo'
// import TodoList from './components/TodoList'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'

import Header from './components/Header'
import Main from './components/Main'
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
    <div className='todoapp'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App
