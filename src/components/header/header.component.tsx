import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useStyles } from './header.styles';

export function HeaderComponent(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h3">TODuS</Typography>
    </div>
  );
}
