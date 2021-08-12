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
  header: {
    position: 'fixed',
    width: '225px',
    background: '#2b6bc4',
    zIndex: 1,
  },
  boxTitle: {
    marginTop: '8px',
    padding: '8px',
    borderRadius: '8px',
    background: '#3f51b5',
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
    marginTop: '40px',
  },
  fab: {
    margin: '8px',
    color: '#2b6bc4',
  },
});
