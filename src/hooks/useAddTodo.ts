import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';

export default function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(addTodo('')), [dispatch]);
  // 그냥 새 요소를 추가하는데 addTodo()의 괄호 안에 아무것도 안넣으면 오류남, 해결법
}
