import React, { useState } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { ThumbUp, ThumbDown, Delete } from '@material-ui/icons';
import { TodoInterface } from '../../interfaces/todo.interface';
import { useStyles } from './card.styles';
import { TodoStatusEnum } from '../../enum/todo-status.enum';
import { CardDetailComponent } from './card-detail.component';

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Container className={classes.container}>
          <div className={classes.action}>
            <Delete onClick={handleOpen} />
            {status === TodoStatusEnum.CONCLUDED && (
              <ThumbUp className={classes.conclude} />
            )}
            {status === TodoStatusEnum.OPENED && (
              <ThumbDown className={classes.opened} />
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
