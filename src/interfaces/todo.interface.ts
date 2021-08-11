import { TodoStatusEnum } from '../enum/todo-status.enum';

export interface TodoInterface {
  id: string;
  description: string;
  email: string;
  name: string;
  status: TodoStatusEnum;
}
