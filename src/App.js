import TodoList from './components/TodosList';
import './App.css';
import { useState } from 'react';

function App() {
  let list = JSON.parse(localStorage.getItem("TodoList")) || [];
  const [todoList, setTodoList] = useState(list);
  const [buttonText, setButtonText] = useState('Add');
  const [todoText, setTodoText] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter your Todo Here...');

  const updateButtonText = () =>{
    if(buttonText==='Add'){
      setPlaceholder('Update your Todo or it will be updated as empty...');
      setButtonText('Update');
    }
    else{
      setPlaceholder('Enter your Todo Here');
      setButtonText('Add');
    }
  }

  const populateTodo = () => {
    const text = todoText.trim();
    if(text) {
      const newTodoList = [...todoList];
      newTodoList.push(text);
      setTodoList(newTodoList);
      localStorage.setItem("TodoList", JSON.stringify(newTodoList));
      setTodoText('');
      if(buttonText === 'Update') updateButtonText();
    }
    else{
      alert('Fill the Text Box correctly');
      setTodoText('');
    }
  }
  const updateTodo = (id) =>{
    setTodoText(todoList[id]);
    updateButtonText();
    deleteTodo(id);
  }
  const deleteTodo = (id) =>{
    const newTodoList = [...todoList];
    newTodoList.splice(id, 1);
    setTodoList(newTodoList);
    localStorage.setItem("TodoList", JSON.stringify(newTodoList));
  }

  return (
    <div className="App">
      <h1>Todos List</h1>
      <div className='form-group'>
        <input type="text" id="todo-editor" onChange={(e)=>{setTodoText(e.target.value)}} value={todoText} placeholder={placeholder} />
        <button onClick={populateTodo}>{buttonText}</button>
      </div>
      <TodoList className='todo-list' list={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
