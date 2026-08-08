import { useState, useRef } from 'react';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState([])
  const inputRef = useRef();

  function handleAddTodo(event) {
    event.preventDefault();

    if (workingTodoTitle) {
    onAddTodo(workingTodoTitle);
    inputRef.current.focus();
    setWorkingTodoTitle('')
  }
}
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input 
      ref={inputRef} 
      type="text" 
      id="todoTitle" 
      name="todoTitle" 
      placeholder={'Todo text'} 
      required
      value={workingTodoTitle}
      onChange={event => setWorkingTodoTitle(event.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
