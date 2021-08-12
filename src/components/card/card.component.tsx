import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@material-ui/core';
import { ThumbUp, ThumbDown, Delete } from '@material-ui/icons';
import { TodoInterface } from '../../interfaces/todo.interface';
import { useStyles } from './card.styles';
import { TodoStatusEnum } from '../../enum/todo-status.enum';
import { CardDetailComponent } from './card-detail.component';
import { useBoardContext } from '../board/board.context';
import { PermissionComponent } from '../permission/permission.component';

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
  const [openDetail, setOpenDetail] = useState(false);
  const [openPermission, setOpenPermission] = useState(false);
  const { changeStatus, deleteTodo } = useBoardContext();

  const handleOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleAuthorize = async (password: string) => {
    await changeStatus(todo.id, TodoStatusEnum.OPENED, password);
  };

  const handleOpenPermission = () => {
    setOpenPermission(true);
  };

  const handleClosePermission = () => {
    setOpenPermission(false);
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
            {status === TodoStatusEnum.OPENED && (
              <IconButton onClick={handleDelete}>
                <Delete />
              </IconButton>
            )}
            {status === TodoStatusEnum.CONCLUDED && (
              <IconButton onClick={handleOpenPermission}>
                <ThumbUp className={classes.conclude} />
              </IconButton>
            )}
            {status === TodoStatusEnum.OPENED && (
              <IconButton onClick={handleConclude}>
                <ThumbDown className={classes.opened} />
              </IconButton>
            )}
          </div>
          <Container className={classes.content} onClick={handleOpenDetail}>
            <Typography variant="subtitle2">{description}</Typography>
            <Typography noWrap variant="caption">
              {email}
            </Typography>
            <Typography noWrap variant="caption">
              {name}
            </Typography>
          </Container>
        </Container>
      </Box>
      <CardDetailComponent
        todo={todo}
        open={openDetail}
        onClose={handleCloseDetail}
      />
      <PermissionComponent
        open={openPermission}
        onClose={handleClosePermission}
        onAuthorize={(password: string) => {
          handleAuthorize(password);
        }}
      />
    </>
  );
}
