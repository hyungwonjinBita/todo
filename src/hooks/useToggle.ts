import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleTodo } from '../modules/todos';

export default function useToggle(id: number) {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
}
