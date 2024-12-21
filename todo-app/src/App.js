import React, {useState} from 'react'; 
import { MdDeleteOutline } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import './App.css';

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAdd = () => {
    if(newTitle === '' || newDescription === ''){
      alert('Please fill in all fields');
      return;
    }
    const newTodo = {
      id: allTodos.length + 1,
      title: newTitle,
      description: newDescription,
      isCompleted: false
    }
    setAllTodos([...allTodos, newTodo]);
    setNewTitle('');
    setNewDescription('');
  }

  return (
    <div className="App">
    <h1> My Todos</h1>

    <div className = "todo-wrapper">
      <div className = "todo-input">
        <div className = "input-item">
        <label> Title</label>
        <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder = "What's on the agenda" />
      </div>
      <div className = "input-item">
        <label> Description</label>
        <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder = "What do you want to achieve" />
      </div>
      <div className = "input-item">
        <button type='button' onClick={handleAdd} className="button"> Add </button>
      </div>
      </div>

      <div className = "todo-buttons">
      <button type='button' className={`btns ${isCompleted === false && 'active'}`} onClick={()=>setIsCompleted(false)}> Todo </button>
      <button type='button' className={`btns ${isCompleted === true && 'active'}`} onClick={()=>setIsCompleted(true)}> Completed </button>
      </div>

      <div className="todo-list">
        {allTodos.map((todo, index) => {
          return(
        <div className="todo-list-item" key={index}>
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
          
          <div>
          <MdDeleteOutline className='icon'/>
          <TiTickOutline className='check-icon'/>
          </div>
        </div>
          )})}
      </div>
    </div>
    </div>
  );
}

export default App;
