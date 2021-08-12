import React from 'react';
import { Modal, Input, Button, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useStyles } from './permission.styles';

interface PermissionComponentProps {
  open: boolean;
  onClose: () => void;
  onAuthorize: (password: string) => void;
}

interface AuthorizeInterfaace {
  password: string;
}

const schema = yup.object().shape({
  password: yup.string().required('Senha para liberação obrigatória'),
});

export function PermissionComponent({
  open,
  onClose,
  onAuthorize,
}: PermissionComponentProps): JSX.Element {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<AuthorizeInterfaace>({
    resolver: yupResolver(schema),
    mode: 'all',
    shouldFocusError: true,
  });

  const onSubmit = async ({ password }: AuthorizeInterfaace) => {
    onAuthorize(password);
  };

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <div className={classes.container}>
        <Typography variant="body2">Autorização para reabrir tarefa</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="password"
            fullWidth
            type="password"
            className={classes.field}
            inputRef={register}
            error={!!errors?.password}
          />
          <Button color="primary" variant="contained" type="submit">
            Reabrir tarefa
          </Button>
        </form>
      </div>
    </Modal>
  );
}
