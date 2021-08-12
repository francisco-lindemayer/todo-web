import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    background: '#ccc9dc',
    margin: '8px',
    padding: '8px',
    borderRadius: '8px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  opened: {
    color: 'grey',
  },
  conclude: {
    color: 'green',
  },
});
