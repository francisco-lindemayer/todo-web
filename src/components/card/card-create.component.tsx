import React, { useState } from 'react';
import { Modal, TextField, Button, Typography } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useStyles } from './card-create.styles';
import { TodoCreateInterface } from '../../interfaces/todo-create.interface';
import { useBoardContext } from '../board/board.context';
import handleServiceError from '../../utils/error-handler';

interface CardCreateComponentProps {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
}

function Alert(props: AlertProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('O email é inválido')
    .required('O email é obrigatório'),
  name: yup.string().required('Responsável é obrigatório.'),
  description: yup
    .string()
    .min(6, 'Descrição deve conter no mínimo 4 caracteres')
    .required('Descrição obrigatória'),
});

export function CardCreateComponent({
  open,
  onClose,
  onCreate,
}: CardCreateComponentProps): JSX.Element {
  const classes = useStyles();
  const { createTodo } = useBoardContext();
  const { register, handleSubmit, errors } = useForm<TodoCreateInterface>({
    resolver: yupResolver(schema),
    mode: 'all',
    shouldFocusError: true,
  });
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (todoData: TodoCreateInterface) => {
    try {
      await createTodo(todoData);
      onCreate();
    } catch (error) {
      const message = handleServiceError(error);
      console.log('opa', message);
      setErrorMessage(message);
    }
  };

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <div className={classes.container}>
        <Typography variant="body2">
          Informe os dados para inclusão da tarefa
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Responsável"
            name="name"
            fullWidth
            variant="outlined"
            className={classes.field}
            inputRef={register}
            error={!!errors?.name}
            helperText={errors?.name?.message}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            variant="outlined"
            className={classes.field}
            inputRef={register}
            error={!!errors?.email}
            helperText={errors?.email?.message}
          />
          <TextField
            label="Descricão"
            name="description"
            fullWidth
            variant="outlined"
            multiline
            className={classes.field}
            inputRef={register}
            error={!!errors?.description}
            helperText={
              errors?.description?.message ||
              'Descreva de forma sucinta a tarefa'
            }
          />
          <Button color="primary" variant="contained" type="submit">
            Adicionar tarefa
          </Button>
        </form>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </div>
    </Modal>
  );
}
