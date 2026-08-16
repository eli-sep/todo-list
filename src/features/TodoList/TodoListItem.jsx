import TextInputWithLabel from '../../shared/TextInputWithLabel';
import { isValidTodoTitle } from '../../utils/todoValidation';
import { useEditableTitle } from '../../hooks/useEditableTitle';

function TodoListItem({ todo, onCompleteTodo , onUpdateTodo }) {

  const { 
    isEditing,
    workingTitle,
    startEditing,
    cancelEdit,
    updateTitle,
    finishEdit,
  } = useEditableTitle(todo.title);

  const elementId = `todo-${todo.id}`

  function handleEdit(event){
    updateTitle(event.target.value)
  }

  function handleUpdate(event){
    event.preventDefault()
    if(!isEditing){ return }
    const finalTitle = finishEdit()
    onUpdateTodo({...todo, title: finalTitle})
  }

  return (
    <li>
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel 
              elementId={elementId}
              value={workingTitle}
              onChange={handleEdit} 
            />
            <button type='button' onClick={cancelEdit}>Cancel</button>
            <button 
              type='button' 
              onClick={(event) => handleUpdate(event)}
              disabled={!isValidTodoTitle(workingTitle)}
            >Update
            </button >
          </>) : (
          <>
            <label htmlFor={elementId}>
              <input
                id={elementId}
                type="checkbox" 
                checked={todo.isCompleted} 
                onChange={() => onCompleteTodo(todo.id)} 
              />
            </label>
            <span onClick={startEditing}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;
