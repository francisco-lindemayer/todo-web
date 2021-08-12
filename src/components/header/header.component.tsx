import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './header.styles';

export function HeaderComponent(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>TODuS</Typography>
    </div>
  );
}
