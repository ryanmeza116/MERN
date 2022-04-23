import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if(newTodo.length === 0){
      return;
    }
    const toDoItem = {
      text: newTodo, 
      complete: false
    }
    setTodos([...todos, toDoItem]);
  }
const handleToDoDelete = (delidx) => {
const filteredTodos = todos.filter((_todo, i) => {
  // todo is not necessary, but index is always accessed in 2nd index with filer operator. 
  return  i !== delidx
});
setTodos(filteredTodos);
}
const handleToggleComplete = (idx) => {
  console.log(idx)
  const updatedTodos = todos.map((todo,i) => {
    console.log(todo)
    if(idx === i) {
      todo.complete = !todo.complete;
    }
    return todo; 
  });
  setTodos(updatedTodos);
}

  return (
    <div style = {{textAlign:'center'}}>
    
    <form onSubmit = {(event) => {
      handleNewTodoSubmit(event);
    }}>
      <input onChange = {(event) => {
        setNewTodo(event.target.value)
      }} type = "text" />
      <div>
        <button> Add </button>
      </div>
    </form>
    {
      todos.map((todo, i) => {
        const todoClasses = ['bold', 'italic'];
        if (todo.complete) {
          todoClasses.push('line-through')
        }

        return (
        <div key = {i}>
          <input onChange = {(event) => {
            handleToggleComplete(i);
            //event is not used, why is it declared?
          }} 
          checked = {todo.complete} 
          type = "checkbox"/>
          <span className= {todoClasses.join(' ')}>{todo.text} </span>
          <button 
          onClick = {(event) => {
            handleToDoDelete(i);
          }}
          style = {{marginLeft: '10px'}}
          > Delete</button>
          </div>
        );
      })}
    </div>
      );
}



export default App;
