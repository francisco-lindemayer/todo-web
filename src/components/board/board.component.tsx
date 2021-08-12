import React from 'react';
import { Paper } from '@material-ui/core';
import { BoardProvider } from './board.context';
import { ListComponent } from '../list/list.component';
import { useStyles } from './board.styles';
import { TodoStatusEnum } from '../../enum/todo-status.enum';
import { BoardHeaderComponent } from './board-header.component';

export function BoardComponent(): JSX.Element {
  const classes = useStyles();
  return (
    <BoardProvider>
      <div>
        <BoardHeaderComponent />
        <div className={classes.container}>
          <ListComponent status={TodoStatusEnum.OPENED} />
          <ListComponent status={TodoStatusEnum.CONCLUDED} />
        </div>
      </div>
    </BoardProvider>
  );
}
