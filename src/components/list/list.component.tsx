import React, { useState } from 'react';
import { Paper, List, Tooltip, Fab, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {
  TodoStatusEnum,
  TodoStatusLabelEnum,
} from '../../enum/todo-status.enum';
import { useBoardContext } from '../board/board.context';
import { CardComponent } from '../card/card.component';
import { useStyles } from './list.styles';
import { CardCreateComponent } from '../card/card-create.component';

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
      <div className={classes.action}>
        {status === TodoStatusEnum.OPENED && (
          <Tooltip title="Adicionar tarefa">
            <Fab
              aria-label="add"
              className={classes.fab}
              size="small"
              onClick={handleOpenCreate}
            >
              <Add />
            </Fab>
          </Tooltip>
        )}
      </div>
      <Paper className={classes.paper}>
        <div className={classes.header}>
          <div className={classes.boxTitle}>
            <Typography className={classes.title}>
              {TodoStatusLabelEnum[status]}
            </Typography>
          </div>
        </div>
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
