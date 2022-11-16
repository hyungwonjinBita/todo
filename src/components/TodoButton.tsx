import React from 'react';
import styled from 'styled-components';
import useToggle from '../hooks/useToggle';

type TodoButtonProps = {
  id: number;
  completed: boolean;
};

export default function TodoButton({ id, completed }: TodoButtonProps) {
  const onClick = useToggle(id);
  const buttonLabel = completed ? '戻す' : '完了';

  return (
    <Button onClick={onClick} completed={completed}>
      {buttonLabel}
    </Button>
  );
}

const Button = styled.button<{ completed: boolean }>`
  all: unset;
  background-color: ${({ completed }) => (completed ? '#d5d5d5' : '#303f9f')};
  color: white;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 6px 16px;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.75;
  border-radius: 4px;
  cursor: pointer;
`;
