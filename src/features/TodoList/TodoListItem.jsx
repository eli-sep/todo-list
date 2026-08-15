import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';

function TodoListItem({ todo, onCompleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTodoTitle, setWorkingTodoTitle] = useState(todo.title)

  function handleCancel(){
    setWorkingTodoTitle(todo.title);
    setIsEditing(false);
  }

  return (
    <li>
      <form>
        {isEditing ? (<>
          <TextInputWithLabel value={todo.title} />
          <button type='button' onClick={() => handleCancel()}>Cancel</button>
        </>) : (
          <>
            <label>
              <input 
                type="checkbox" 
                checked={todo.isCompleted} 
                onChange={() => onCompleteTodo(todo.id)} 
              />
            </label>
            <span onClick={() => setIsEditing(true)}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;
