import { useState, useRef } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  const inputRef = useRef();

  function handleAddTodo(event) {
    event.preventDefault();

    onAddTodo(workingTodoTitle);
    inputRef.current.focus();
    setWorkingTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel 
        elementId='todoTitle'
        labelText='Todo: '
        onChange={(event) => setWorkingTodoTitle(event.target.value)}
        ref={inputRef}
        value={workingTodoTitle} 
      />

      <button type="submit" disabled={!workingTodoTitle.trim()}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
