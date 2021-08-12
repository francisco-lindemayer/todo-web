import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    maxWidth: '90vw',
    height: '50vh',
    marginTop: '15vh',
    background: '#ccc9dc',
    borderRadius: '8px',
  },
  opened: {
    color: 'grey',
  },
  conclude: {
    color: 'green',
  },
});
