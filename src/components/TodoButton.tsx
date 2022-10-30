import React from 'react';
import useToggle from '../hooks/useToggle';
import { TodoProps } from './TodoItem';

export default function TodoButton({ todo }: TodoProps) {
  const onToggle = useToggle(todo.id);

  return <button onClick={onToggle}>완료</button>;
}
