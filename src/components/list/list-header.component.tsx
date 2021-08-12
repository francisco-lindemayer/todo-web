import React from 'react';
import { Tooltip, Fab, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {
  TodoStatusEnum,
  TodoStatusLabelEnum,
} from '../../enum/todo-status.enum';
import { useStyles } from './list-header.styles';

interface ListHeaderComponentProps {
  status: TodoStatusEnum;
  onClick: () => void;
}

export function ListHeaderComponent({
  status,
  onClick,
}: ListHeaderComponentProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.boxTitle}>
          <Typography className={classes.title}>
            {TodoStatusLabelEnum[status]}
          </Typography>
        </div>
      </div>
      <div className={classes.action}>
        {status === TodoStatusEnum.OPENED && (
          <Tooltip title="Adicionar tarefa">
            <Fab
              aria-label="add"
              className={classes.fab}
              size="small"
              onClick={onClick}
            >
              <Add />
            </Fab>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
