import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import "./App.css";

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [CompletedTodos, setCompletedTodos] = useState([]);

  const handleAdd = () => {
    if (newTitle === "" && newDescription === "") {
      alert("Please fill in all fields");
      return;
    }
    const newTodo = {
      id: allTodos.length + 1,
      title: newTitle,
      description: newDescription,
      isCompleted: false,
    };
    setAllTodos([...allTodos, newTodo]);
    setNewTitle("");
    setNewDescription("");
  };

  const handleDelete = (index) => {
    const newTodos = allTodos.filter((todo, i) => i !== index);
    setAllTodos(newTodos);
  };

  const handleDeleteCompleted = (index) => {
    const newCompletedTodos = CompletedTodos.filter((todo, i) => i !== index);
    setCompletedTodos(newCompletedTodos);
  };

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let CompletedOn =
      dd + "-" + mm + "-" + yyyy + " at " + hr + ":" + min + ":" + sec;

    let filteredItem = {
      ...allTodos[index],
      CompletedOn: CompletedOn,
    };

    let updatedCompletedTodos = [...CompletedTodos];
    updatedCompletedTodos.push(filteredItem);
    setCompletedTodos(updatedCompletedTodos);
    handleDelete(index);
  };

  return (
    <div className="App">
      <h1> My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="input-item">
            <label> Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What's on the agenda"
            />
          </div>
          <div className="input-item">
            <label> Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="What do you want to achieve"
            />
          </div>
          <div className="input-item">
            <button type="button" onClick={handleAdd} className="button">
              {" "}
              Add{" "}
            </button>
          </div>
        </div>

        <div className="todo-buttons">
          <button
            type="button"
            className={`btns ${isCompleted === false && "active"}`}
            onClick={() => setIsCompleted(false)}
          >
            {" "}
            Todo{" "}
          </button>
          <button
            type="button"
            className={`btns ${isCompleted === true && "active"}`}
            onClick={() => setIsCompleted(true)}
          >
            {" "}
            Completed{" "}
          </button>
        </div>

        <div className="todo-list">
          {isCompleted === false &&
            allTodos.map((todo, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                  </div>

                  <div>
                    <MdDeleteOutline
                      className="icon"
                      onClick={() => handleDelete(index)}
                      title="Delete?"
                    />
                    <TiTickOutline
                      className="check-icon"
                      onClick={() => handleComplete(index)}
                      title="Complete?"
                    />
                  </div>
                </div>
              );
            })}

          {isCompleted === true &&
            CompletedTodos.map((todo, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>Completed on: {todo.CompletedOn}</p>
                  </div>

                  <div>
                    <MdDeleteOutline
                      className="icon"
                      onClick={() => handleDeleteCompleted(index)}
                      title="Delete?"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
