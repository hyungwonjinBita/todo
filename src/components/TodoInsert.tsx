import { ChangeEvent, useState } from 'react';
import { TodoProps } from './TodoItem';

export default function TodoInsert({ todo }: TodoProps) {
  const [value, setValue] = useState(todo.title);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input value={value} onChange={onChange} />;
}
