import React from 'react';
import styled from 'styled-components';
import useToggle from '../hooks/useToggle';
import { TodoProps } from './TodoItem';

export default function TodoButton({ todo }: TodoProps) {
  const onToggle = useToggle(todo.id);
  console.log(todo.completed);

  if (todo.completed) {
    return <BackButton onClick={onToggle}>戻す</BackButton>;
  } else {
    return <FinishButton onClick={onToggle}>完了</FinishButton>;
  }
}

const FinishButton = styled.button`
  all: unset;
  background-color: #303f9f;
  color: white;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 6px 16px;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.75;
  border-radius: 4px;
`;
const BackButton = styled.button`
  all: unset;
  background-color: #d5d5d5;
  color: white;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 6px 16px;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.75;
  border-radius: 4px;
`;
