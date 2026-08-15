import TodoListItem from './TodoListItem.jsx';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo }) {
  // const todoList = [
  //   { id: 1, title: 'review resources' },
  //   { id: 2, title: 'take notes' },
  //   { id: 3, title: 'code out app' },
  // ];

  const filteredTodoList = todoList.filter((todo) => todo.isCompleted !== true);

  return (
    <>
      {filteredTodoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul>
          {filteredTodoList.map((todo) => (
            <TodoListItem 
              key={todo.id} 
              todo={todo} 
              onCompleteTodo={onCompleteTodo}
              onUpdateTodo={onUpdateTodo} />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
