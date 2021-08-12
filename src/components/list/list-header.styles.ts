import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '380px',
    borderRadius: '8px',
    background: '#3f51b5',
    minHeight: '60px',
  },
  action: {},
  header: {},
  boxTitle: {
    padding: '8px',
  },
  title: {
    color: '#ffff',
  },
  fab: {
    margin: '8px',
    color: '#2b6bc4',
  },
});
