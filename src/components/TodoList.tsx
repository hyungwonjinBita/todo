import useTodoList from '../hooks/useTodoList';
// import { Todo } from '../types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useTodoList();

  if (todos.length === 0) return <p>표시할 것이 없습니다.</p>;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
