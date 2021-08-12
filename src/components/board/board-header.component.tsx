import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Fab,
} from '@material-ui/core';
import { Menu, Refresh } from '@material-ui/icons';
import { useStyles } from './board-header.styles';
import { useBoardContext } from './board.context';

export function BoardHeaderComponent(): JSX.Element {
  const classes = useStyles();
  const { randomTodoGeneration, requestDataReload } = useBoardContext();

  const handleRandomGeneration = () => {
    randomTodoGeneration();
  };

  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Let&apos;s do it together
          </Typography>
          <IconButton>
            <Tooltip title="Recarregar tarefas">
              <Fab
                aria-label="refresh"
                size="small"
                onClick={requestDataReload}
              >
                <Refresh color="primary" />
              </Fab>
            </Tooltip>
          </IconButton>
          <Button
            color="inherit"
            className={classes.button}
            onClick={handleRandomGeneration}
          >
            Estou sem tarefas
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
