import React, { createContext, useContext, useState, useEffect } from 'react';
import TodoService from '../../services/todo.service';
import { TodoStatusEnum } from '../../enum/todo-status.enum';
import { TodoCreateInterface } from '../../interfaces/todo-create.interface';
import { TodoInterface } from '../../interfaces/todo.interface';
import handleServiceError from '../../utils/error-handler';

interface BoardContextInterface {
  todos: TodoInterface[];
  requestDataReload: () => void;
  createTodo: (todoData: TodoCreateInterface) => Promise<void>;
  indexTodo: (todoId: string) => Promise<TodoInterface | undefined>;
  updateTodo: (todoId: string, todoData: TodoCreateInterface) => Promise<void>;
  deleteTodo: (todoId: string) => void;
  changeStatus: (todoId: string, changeStatusTo: TodoStatusEnum) => void;
  randomTodoGeneration: () => void;
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

  const createTodo = async (todoData: TodoCreateInterface): Promise<void> => {
    const createdTodo = await TodoService.create(todoData);
    _setTodos([...todos, createdTodo]);
  };

  const updateTodo = async (
    todoId: string,
    todoData: TodoCreateInterface,
  ): Promise<void> => {
    const updatedTodo = await TodoService.update(todoId, todoData);
    _setTodos([
      ...todos.filter(todo => todo.id !== updatedTodo.id),
      updatedTodo,
    ]);
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

  const deleteTodo = async (todoId: string): Promise<void> => {
    await TodoService.delete(todoId);
    const todosWithoutItemDelete = todos.filter(todo => todo.id !== todoId);
    _setTodos(todosWithoutItemDelete);
  };

  const changeStatus = async (
    todoId: string,
    changeStatusTo: TodoStatusEnum,
  ): Promise<void> => {
    const updatedTodo = await TodoService.changeStatus(todoId, changeStatusTo);
    _setTodos([
      ...todos.filter(todo => todo.id !== updatedTodo.id),
      updatedTodo,
    ]);
  };

  const randomTodoGeneration = async (): Promise<void> => {
    const createdTodos = await TodoService.randomGeneration();
    _setTodos([...todos, ...createdTodos]);
  };

  const requestDataReload = (): void => {
    _setListMustBeLoad(true);
  };

  useEffect(() => {
    showTodos();
  }, [listMustBeLoad]);

  return (
    <BoardContext.Provider
      value={{
        todos,
        requestDataReload,
        createTodo,
        indexTodo,
        updateTodo,
        deleteTodo,
        changeStatus,
        randomTodoGeneration,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export function useBoardContext(): BoardContextInterface {
  return useContext(BoardContext);
}
