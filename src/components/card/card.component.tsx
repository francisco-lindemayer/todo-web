import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@material-ui/core';
import { ThumbUp, ThumbDown, Delete } from '@material-ui/icons';
import { TodoInterface } from '../../interfaces/todo.interface';
import { useStyles } from './card.styles';
import { TodoStatusEnum } from '../../enum/todo-status.enum';
import { CardDetailComponent } from './card-detail.component';
import { useBoardContext } from '../board/board.context';

interface CardComponentProps {
  index: number;
  todo: TodoInterface;
}

export function CardComponent({
  todo,
  index,
}: CardComponentProps): JSX.Element {
  const { description, email, name, status } = todo;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { changeStatus, deleteTodo } = useBoardContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReopen = async () => {
    await changeStatus(todo.id, TodoStatusEnum.OPENED);
  };

  const handleConclude = async () => {
    await changeStatus(todo.id, TodoStatusEnum.CONCLUDED);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <>
      <Box>
        <Container className={classes.container}>
          <div className={classes.action}>
            <IconButton onClick={handleDelete}>
              <Delete />
            </IconButton>
            {status === TodoStatusEnum.CONCLUDED && (
              <IconButton onClick={handleReopen}>
                <ThumbUp className={classes.conclude} />
              </IconButton>
            )}
            {status === TodoStatusEnum.OPENED && (
              <IconButton onClick={handleConclude}>
                <ThumbDown className={classes.opened} />
              </IconButton>
            )}
          </div>
          <Typography variant="subtitle2">{description}</Typography>
          <Typography noWrap variant="caption">
            {email}
          </Typography>
          <Typography noWrap variant="caption">
            {name}
          </Typography>
        </Container>
      </Box>
      <CardDetailComponent todo={todo} open={open} onClose={handleClose} />
    </>
  );
}
