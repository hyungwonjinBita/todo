import styled from 'styled-components';
import useAddTodo from '../hooks/useAddTodo';
import useTodoList from '../hooks/useTodoList';
// import { Todo } from '../types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useTodoList();
  const onAddTodo = useAddTodo();

  if (todos.length === 0) return <p>표시할 것이 없습니다.</p>;
  return (
    <Wrapper>
      <ul>
        {todos.map((todo) => (
          <TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id} />
        ))}
      </ul>
      <Button onClick={onAddTodo}>タスクを追加</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d5d5d5;
  width: 30%;
  height: 50px;
  border-radius: 15px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;
