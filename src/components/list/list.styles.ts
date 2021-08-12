import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '240px',
    background: '#2b6bc4',
    overflow: 'auto',
    margin: '0 8px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
});
