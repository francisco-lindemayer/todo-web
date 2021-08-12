import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    background: '#ccc9dc',
    margin: '8px',
    padding: '8px',
    borderRadius: '8px',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  opened: {
    color: 'grey',
  },
  conclude: {
    color: 'green',
  },
});
