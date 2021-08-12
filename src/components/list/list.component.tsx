import React, { useState } from 'react';
import { Paper, List } from '@material-ui/core';
import { TodoStatusEnum } from '../../enum/todo-status.enum';
import { useBoardContext } from '../board/board.context';
import { CardComponent } from '../card/card.component';
import { useStyles } from './list.styles';
import { CardCreateComponent } from '../card/card-create.component';
import { ListHeaderComponent } from './list-header.component';

interface ListComponentProps {
  status: TodoStatusEnum;
}

export function ListComponent({ status }: ListComponentProps): JSX.Element {
  const classes = useStyles();
  const { todos } = useBoardContext();
  const [openCreate, setOpenCreate] = useState<boolean>(false);

  const handleOpenCreate = (): void => {
    setOpenCreate(true);
  };

  const handleCloseCreate = (): void => {
    setOpenCreate(false);
  };

  return (
    <div className={classes.container}>
      <ListHeaderComponent status={status} onClick={handleOpenCreate} />
      <Paper className={classes.paper}>
        <List className={classes.list}>
          {todos
            .filter(todo => todo.status === status)
            .map((todo, index) => (
              <CardComponent key={todo.id} index={index} todo={todo} />
            ))}
        </List>
        <CardCreateComponent
          open={openCreate}
          onClose={handleCloseCreate}
          onCreate={() => setOpenCreate(false)}
        />
      </Paper>
    </div>
  );
}
