import React, { createContext, useContext, useState, useEffect } from 'react';
import TodoService from '../../services/todo.service';
import { TodoStatusEnum } from '../../enum/todo-status.enum';
import { TodoCreateInterface } from '../../interfaces/todo-create.interface';
import { TodoInterface } from '../../interfaces/todo.interface';
import handleServiceError from '../../utils/error-handler';

interface BoardContextInterface {
  todos: TodoInterface[];
  requestDataReload: () => void;
  createTodo: (todoData: TodoCreateInterface) => Promise<string | undefined>;
  indexTodo: (todoId: string) => Promise<TodoInterface | undefined>;
  updateTodo: (
    todoId: string,
    todoData: TodoCreateInterface,
  ) => Promise<string | undefined>;
  // deleteTodo: (todoId: string) => boolean;
  // changeStatus: (todoId: string, changeStatusTo: TodoStatusEnum) => boolean;
  // randomTodoGeneration: () => void;
}

const BoardContext = createContext<BoardContextInterface>(
  {} as BoardContextInterface,
);

export function BoardProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [todos, _setTodos] = useState<TodoInterface[]>([]);
  const [listMustBeLoad, _setListMustBeLoad] = useState<boolean>(true);

  const createTodo = async (
    todoData: TodoCreateInterface,
  ): Promise<string | undefined> => {
    const createdTodo = await TodoService.create(todoData);
    _setTodos([...todos, createdTodo]);
    return undefined;
  };

  const updateTodo = async (
    todoId: string,
    todoData: TodoCreateInterface,
  ): Promise<string | undefined> => {
    const updatedTodo = await TodoService.update(todoId, todoData);
    _setTodos([...todos, updatedTodo]);
    return undefined;
  };

  const showTodos = async (): Promise<void> => {
    _setListMustBeLoad(false);
    const reloadedTodoList = await TodoService.show();
    _setTodos(reloadedTodoList);
  };

  const indexTodo = async (
    todoId: string,
  ): Promise<TodoInterface | undefined> => {
    try {
      const todo = await TodoService.index(todoId);
      return todo;
    } catch (error) {
      return undefined;
    }
  };

  const requestDataReload = (): void => {
    _setListMustBeLoad(true);
  };

  useEffect(() => {
    showTodos();
  }, [listMustBeLoad]);

  return (
    <BoardContext.Provider
      value={{ todos, requestDataReload, createTodo, indexTodo, updateTodo }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export function useBoardContext(): BoardContextInterface {
  return useContext(BoardContext);
}
