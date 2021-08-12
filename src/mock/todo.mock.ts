import { TodoStatusEnum } from '../enum/todo-status.enum';
import { TodoInterface } from '../interfaces/todo.interface';

export const showTodoMock = (): TodoInterface[] => [
  {
    id: '734l3349jkl3jl6342ff',
    description: 'Todo 1',
    email: 'john@email.com',
    name: 'John Doe',
    status: TodoStatusEnum.OPENED,
  },
  {
    id: '734l3349jkl3jl6342fsdff',
    description: 'Todo 2',
    email: 'john@email.com',
    name: 'John Doe',
    status: TodoStatusEnum.OPENED,
  },
  {
    id: '734l3349jkasdfasdl3jl6342ff',
    description: 'Todo 3',
    email: 'john@email.com',
    name: 'John Doe',
    status: TodoStatusEnum.OPENED,
  },
  {
    id: '734l33das49jkasdfasdl3jl6342ff',
    description: 'Todo 4',
    email: 'john@email.com',
    name: 'John Doe',
    status: TodoStatusEnum.OPENED,
  },
  {
    id: '734l33sdsd49jkasdfasdl3jl6342ff',
    description: 'Todo 5',
    email: 'john@email.com',
    name: 'John Doe',
    status: TodoStatusEnum.OPENED,
  },
  {
    id: '734l3349jkasdfasdl3jl6342ff',
    description: 'Todo 6',
    email: 'john@email.com',
    name: 'John Doe',
    status: TodoStatusEnum.CONCLUDED,
  },
];

export const indexTodoMock = (): TodoInterface => ({
  id: '734l3349jkl3jl6342ff',
  description: 'Todo 1',
  email: 'john@email.com',
  name: 'John Doe',
  status: TodoStatusEnum.OPENED,
});
