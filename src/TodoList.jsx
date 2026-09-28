import React, { useState } from 'react';
import './TodoList.css';
import { Button } from './Button';


// todo list component 

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  // add todo handle
  const handleAdd = () => {
    if (!inputValue.trim()) return;
    const newTodo = { id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // delete todo handle
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // update todo handle
  const handleStartUpdate = (todo) => {
    setEditingId(todo.id);
    setEditValue(todo.text);
  };

  // update handle
  const handleUpdate = () => {
    if (!editValue.trim()) return;
    setTodos(todos.map(todo => 
      todo.id === editingId ? { ...todo, text: editValue } : todo
    ));
    setEditingId(null);
    setEditValue('');
  };

  // render todo list
  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
      
      // todo list rendering
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            {editingId === todo.id ? (
              <div className="edit-mode">
                <input 
                  type="text" 
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={handleUpdate}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <div className="view-mode">
                <span>{todo.text}</span>
                <div className="actions">
                  <button onClick={() => handleStartUpdate(todo)}>Update</button>
                  {/* <button onClick={() => handleDelete(todo.id)}>Delete</button> */}
                  <Button text={"Delete"} bg={"btn-red"} onClick={() => handleDelete(todo.id)}/>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
