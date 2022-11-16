import { ChangeEvent } from 'react';
import styled from 'styled-components';

type TodoInputProps = {
  value: string;
  handleValue: (string: string) => void;
};

export function TodoInput({ value, handleValue }: TodoInputProps) {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleValue(event.target.value);
  };

  return <Input value={value} onChange={onChange} />;
}

const Input = styled.input`
  all: unset;
  width: 90%;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid #989898;
  color: black;
`;
