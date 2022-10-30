import { Todo } from '../types';
import TodoButton from './TodoButton';
import TodoInsert from './TodoInsert';

export type TodoProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoProps) {
  return (
    <>
      <li>
        <TodoInsert todo={todo} />
      </li>
      <TodoButton />
    </>
  );
}
