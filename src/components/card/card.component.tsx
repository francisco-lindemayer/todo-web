import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import { TodoInterface } from '../../interfaces/todo.interface';
import { useStyles } from './card.styles';
import { TodoStatusEnum } from '../../enum/todo-status.enum';

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
  return (
    <Box>
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
    </Box>
  );
}
