import { Todo } from '../types';
import TodoButton from './TodoButton';
import TodoInsert from './TodoInsert';
import './TodoItem.css';

export type TodoProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoProps) {
  return (
    <>
      <li className={`TodoItem ${todo.completed ? 'done' : ''}`}>
        <TodoInsert todo={todo} />
      </li>
      <TodoButton todo={todo} />
    </>
  );
}
