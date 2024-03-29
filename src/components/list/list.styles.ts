import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '16px',
    minWidth: '380px',
    background: '#2b6bc4',
    overflow: 'auto',
    borderRadius: '8px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80px',
  },
  fab: {
    margin: '8px',
    color: '#2b6bc4',
  },
});
