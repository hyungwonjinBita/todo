import { todoItemsSelector } from '../modules/todos';
import { useSelector } from '../store';

export default function useTodoList() {
  const todos = useSelector(todoItemsSelector);
  return todos;
}
