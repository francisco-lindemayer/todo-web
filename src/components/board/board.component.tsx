import React from 'react';
import { BoardProvider } from './board.context';
import { TodoInterface } from '../../interfaces/todo.interface';
import { ListComponent } from '../list/list.component';
import { useStyles } from './board.styles';
import { TodoStatusEnum } from '../../enum/todo-status.enum';

export function BoardComponent(): JSX.Element {
  const classes = useStyles();
  return (
    <BoardProvider>
      <div className={classes.container}>
        <ListComponent status={TodoStatusEnum.OPENED} />
        <ListComponent status={TodoStatusEnum.CONCLUDED} />
      </div>
    </BoardProvider>
  );
}
