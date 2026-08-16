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
              elementId='listItem'
              value={workingTitle}
              onChange={handleEdit} 
            />
            <button type='button' onClick={cancelEdit}>Cancel</button>
            <button 
              type='submit' 
              disabled={!isValidTodoTitle(workingTitle)}
            >Update
            </button >
          </>) : (
          <>
            <label htmlFor='listItem'>
              <input
                id='listItem'
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
