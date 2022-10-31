import { Todo } from '../types';
import TodoButton from './TodoButton';
import TodoInsert from './TodoInsert';
import styled from 'styled-components';

export type TodoProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoProps) {
  return (
    <WrapperItem>
      <Item className={`TodoItem ${todo.completed ? 'done' : ''}`}>
        <TodoInsert todo={todo} />
      </Item>
      <div>
        <TodoButton todo={todo} />
      </div>
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
