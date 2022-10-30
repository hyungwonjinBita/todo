import { Todo } from '../types';
import TodoButton from './TodoButton';

export type TodoProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoProps) {
  console.log(todo);
  return (
    <>
      <li>{todo.title}</li>
      <TodoButton />
    </>
  );
}
