import React, {useState} from 'react'; 
import './App.css';

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div className="App">
    <h1> My Todos</h1>

    <div className = "todo-wrapper">
      <div className = "todo-input">
        <div className = "input-item">
        <label> Title</label>
        <input type="text" placeholder = "What's on the agenda" />
      </div>
      <div className = "input-item">
        <label> Description</label>
        <input type="text" placeholder = "What do you want to achieve" />
      </div>
      <div className = "input-item">
        <button type='button' className="button"> Add </button>
      </div>
      </div>

      <div className = "todo-buttons">
      <button type='button' className={`btns ${isCompleted === false && 'active'}`} onClick={()=>setIsCompleted(false)}> Todo </button>
      <button type='button' className={`btns ${isCompleted === true && 'active'}`} onClick={()=>setIsCompleted(true)}> Completed </button>
      </div>

      <div className="todo-list">
        <div className="todo-lit-item">
          <h3>Task 1</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
