import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '600px',
    maxWidth: '90vw',
    height: '80vh',
    marginTop: '15vh',
    background: '#ccc9dc',
    borderRadius: '8px',
    padding: '32px',
  },
  field: {
    margin: '8px',
  },
  multiline: {
    margin: '8px',
    height: '300px',
  },
});
