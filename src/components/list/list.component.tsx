import React from 'react';
import { Paper, List } from '@material-ui/core';
import { TodoStatusEnum } from '../../enum/todo-status.enum';
import { useBoardContext } from '../board/board.context';
import { CardComponent } from '../card/card.component';
import { useStyles } from './list.styles';

interface ListComponentProps {
  status: TodoStatusEnum;
}

export function ListComponent({ status }: ListComponentProps): JSX.Element {
  const classes = useStyles();
  const { todos } = useBoardContext();

  return (
    <Paper className={classes.container}>
      <List className={classes.list}>
        {todos
          .filter(todo => todo.status === status)
          .map((todo, index) => (
            <CardComponent key={todo.id} index={index} todo={todo} />
          ))}
      </List>
    </Paper>
  );
}
