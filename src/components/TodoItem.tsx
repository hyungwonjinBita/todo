import { Todo } from '../types';
import TodoButton from './TodoButton';
import { TodoInput } from './TodoInput';
import styled from 'styled-components';
import { useState } from 'react';
import { TodoCompleted } from './TodoCompleted';

export type TodoProps = {
  todo: Todo;
};

type TodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoItem({ id, title, completed }: TodoItemProps) {
  const [value, setValue] = useState(title);
  const handleValue = (string: string) => setValue(string);

  return (
    <WrapperItem>
      <Item>
        {completed ? <TodoCompleted>{value}</TodoCompleted> : <TodoInput value={value} handleValue={handleValue} />}
      </Item>
      <TodoButton id={id} completed={completed} />
    </WrapperItem>
  );
}

const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  box-sizing: border-box;
`;

const Item = styled.li`
  width: 80%;
  margin-left: 10px;
`;
