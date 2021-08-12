import React from 'react';
import { Modal, Container, Typography } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import { TodoInterface } from '../../interfaces/todo.interface';
import { useStyles } from './card-detail.styles';
import { TodoStatusEnum } from '../../enum/todo-status.enum';

interface CardDetailComponentProps {
  todo: TodoInterface;
  open: boolean;
  onClose?: () => void;
}

export function CardDetailComponent({
  todo,
  open,
  onClose,
}: CardDetailComponentProps): JSX.Element {
  const { description, email, name, status } = todo;
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose}>
      <Container className={classes.container}>
        {status === TodoStatusEnum.CONCLUDED && (
          <ThumbUp className={classes.conclude} />
        )}
        {status === TodoStatusEnum.OPENED && (
          <ThumbDown className={classes.opened} />
        )}
        <Typography variant="subtitle2">{description}</Typography>
        <Typography>{email}</Typography>
        <Typography>{name}</Typography>
        <Typography>{status}</Typography>
      </Container>
    </Modal>
  );
}
