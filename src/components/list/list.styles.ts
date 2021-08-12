import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '240px',
    background: '#2b6bc4',
    overflow: 'auto',
    margin: '0 8px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '40px',
  },
  fab: {
    margin: '8px',
    color: '#2b6bc4',
  },
});
