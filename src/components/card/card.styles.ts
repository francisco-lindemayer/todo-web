import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    background: '#ccc9dc',
    margin: '16px',
    padding: '8px',
    borderRadius: '8px',
  },
  opened: {
    color: 'grey',
  },
  conclude: {
    color: 'green',
  },
});
