import React from 'react';
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
