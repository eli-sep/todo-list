import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';
import { isValidTodoTitle } from '../../utils/todoValidation';

function TodoListItem({ todo, onCompleteTodo , onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTodoTitle, setWorkingTodoTitle] = useState(todo.title)

  function handleCancel(){
    setWorkingTodoTitle(todo.title);
    setIsEditing(false);
  }

  function handleEdit(event){
    setWorkingTodoTitle(event.target.value)
  }

  function handleUpdate(event){
    if(!isEditing){ return }
    event.preventDefault()
    onUpdateTodo({...todo, title: workingTodoTitle})
    setIsEditing(false) 
  }

  return (
    <li>
      <form onSubmit={handleUpdate}>
        {isEditing ? (<>
          <TextInputWithLabel 
            value={workingTodoTitle}
            onChange={handleEdit} />
          <button type='button' onClick={handleCancel}>Cancel</button>
          <button 
            type='button' 
            onClick={(event) => handleUpdate(event)} 
            disabled={!isValidTodoTitle(workingTodoTitle)}
          >Update</button >
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
