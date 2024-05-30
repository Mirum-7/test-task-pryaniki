import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useFormik } from 'formik';
import useModal from '../../hooks/modal';
import { useAddRowMutation } from '../../store/slices/table';
import { validationSchema } from '../../utils/shema/table';
import BuildFields from './assets/buildFields';
import { TableElementTypeNoId } from '../../types/table';
import { tableRowOrder } from '../../consts/table';
import { useState } from 'react';
import { statuses } from '../../types/response';
import { LoadingButton } from '@mui/lab';

function generateInitialValue(): TableElementTypeNoId {
  const values = {} as TableElementTypeNoId;
  for (let cell of tableRowOrder) {
    values[cell.prop] = '';
  }
  return values;
}

function ModalAddRow ({ opened }: { opened: boolean }) {
  const modal = useModal();

  const [
    addRow,
    {isLoading},
  ] = useAddRowMutation();

  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: generateInitialValue(),
    validationSchema,
    onSubmit(values) {
      setError('');
      addRow(values).unwrap()
        .then((response) => {
          if(response.error_code === statuses.accessDeny) {
            setError('Ошибка авторизации');
            return;
          }
          modal.close();
        }).catch(() => {
          setError('Ошибка подключения');
        });;
    },
  });

  return (
    <Dialog
      open={opened}
      onClose={() => modal.close()}
    >
      <form
        onSubmit={formik.handleSubmit}
        onChange={formik.handleChange}
      >
        <DialogTitle>
          Добавить строку
        </DialogTitle>
        <DialogContent sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
        }}>
          <BuildFields formik={formik}/>
        </DialogContent>
        <DialogActions>
          <Typography variant="body1" color="red">
            {error}
          </Typography>
          <LoadingButton type="submit" loading={isLoading} disabled={isLoading}>
            Сохранить
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default ModalAddRow;
