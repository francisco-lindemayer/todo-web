import { TodoInterface } from '../interfaces/todo.interface';
import { api } from './api';
import { showTodoMock, indexTodoMock } from '../mock/todo.mock';
import { environment } from '../config/api-server.config';
import handleServiceError from '../utils/error-handler';
import { TodoUpdateInterface } from '../interfaces/todo-update.interface';
import { TodoStatusEnum } from '../enum/todo-status.enum';
import { TodoCreateInterface } from '../interfaces/todo-create.interface';

const prefix = '/todo';

class TodoService {
  public async create(todoData: TodoCreateInterface): Promise<TodoInterface> {
    try {
      if (environment.mockmode) {
        return await indexTodoMock();
      }
      const { data } = await api.post<TodoInterface>(`${prefix}`, todoData);
      return data;
    } catch (error) {
      throw handleServiceError(error);
    }
  }

  public async show(): Promise<TodoInterface[]> {
    try {
      if (environment.mockmode) {
        return await showTodoMock();
      }
      const { data } = await api.get<TodoInterface[]>(`${prefix}`);
      return data;
    } catch (error) {
      throw handleServiceError(error);
    }
  }

  public async index(todoId: string): Promise<TodoInterface> {
    try {
      if (environment.mockmode) {
        return await indexTodoMock();
      }
      const { data } = await api.get<TodoInterface>(`${prefix}/${todoId}`);
      return data;
    } catch (error) {
      throw handleServiceError(error);
    }
  }

  public async update(
    todoId: string,
    todoData: TodoUpdateInterface,
  ): Promise<TodoInterface> {
    try {
      if (environment.mockmode) {
        return await indexTodoMock();
      }
      const { data } = await api.put<TodoInterface>(
        `${prefix}/${todoId}`,
        todoData,
      );
      return data;
    } catch (error) {
      throw handleServiceError(error);
    }
  }

  public async delete(todoId: string): Promise<void> {
    try {
      if (environment.mockmode) {
        return;
      }
      await api.delete<TodoInterface>(`${prefix}/${todoId}`);
      return;
    } catch (error) {
      throw handleServiceError(error);
    }
  }

  public async changeStatus(
    todoId: string,
    status: TodoStatusEnum,
  ): Promise<TodoInterface> {
    try {
      if (environment.mockmode) {
        return indexTodoMock();
      }
      const { data } = await api.patch<TodoInterface>(
        `${prefix}/${todoId}/status`,
        {
          status,
        },
      );
      return data;
    } catch (error) {
      throw handleServiceError(error);
    }
  }

  public async randomGeneration(): Promise<TodoInterface[]> {
    try {
      if (environment.mockmode) {
        return showTodoMock();
      }
      const { data } = await api.post<TodoInterface[]>(`${prefix}/random`);
      return data;
    } catch (error) {
      throw handleServiceError(error);
    }
  }
}

export default new TodoService();
