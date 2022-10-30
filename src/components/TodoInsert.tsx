import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { TodoProps } from './TodoItem';

export default function TodoInsert({ todo }: TodoProps) {
  const [value, setValue] = useState(todo.title);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input value={value} onChange={onChange} />;
}

const Input = styled.input`
  all: unset;
  font: inherit;
  width: 90%;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid #989898;
`;
