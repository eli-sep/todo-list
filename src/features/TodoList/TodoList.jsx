import TodoListItem from './TodoListItem.jsx';

function TodoList({ todoList, onCompleteTodo }) {
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
            <TodoListItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
