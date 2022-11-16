export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoState = Todo[];

export type InitialState = {
  todoItem: Todo[];
};
