import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';

function TodoListItem({ todo, onCompleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <form>
        {isEditing ? (
          <TextInputWithLabel value={todo.title} />
        ) : (
          /* <button onClick={() => setIsEditing(false)}>Save</button> */
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
