import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    maxWidth: '90vw',
    height: '40vh',
    marginTop: '15vh',
    background: '#ccc9dc',
    borderRadius: '8px',
    padding: '32px',
  },
  field: {
    margin: '8px',
  },
});
