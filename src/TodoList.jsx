import TodoListItem from './TodoListItem.jsx'

function TodoList({todoList}) {
  // const todoList = [
  //   { id: 1, title: 'review resources' },
  //   { id: 2, title: 'take notes' },
  //   { id: 3, title: 'code out app' },
  // ];
    return (
      <>
      {todoList.length === 0 ? (<p>Add todo above to get started</p>) : (
      <ul>
        {todoList.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul>
      )}
      </>
    );
}

export default TodoList;