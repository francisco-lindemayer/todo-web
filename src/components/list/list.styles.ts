import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: '60px',
    marginRight: '32px',
  },
  title: {
    color: '#ffff',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '240px',
    background: '#2b6bc4',
    overflow: 'auto',
    margin: '0 32px',
    borderRadius: '8px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  fab: {
    margin: '8px',
    color: '#2b6bc4',
  },
});
