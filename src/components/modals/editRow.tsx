import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useFormik } from 'formik';
import useModal from '../../hooks/modal';
import { useEditRowMutation } from '../../store/slices/table';
import { TableElementType } from '../../types/table';
import { validationSchema } from '../../utils/shema/table';
import BuildFields from './assets/buildFields';
import { useState } from 'react';
import { statuses } from '../../types/response';
import { LoadingButton } from '@mui/lab';

function ModalEditRow ({ opened, data }: { opened: boolean, data: TableElementType }) {
  const modal = useModal();

  const [
    editRow,
    { isLoading },
  ] = useEditRowMutation();

  const [error, setError] = useState('');

  const { id, ...rest } = data;

  const formik = useFormik({
    initialValues: rest, 
    validationSchema,
    onSubmit(values) {
      setError('');
      editRow({
        id: id,
        data: values,
      }).unwrap()
        .then((response) => {
          if(response.error_code === statuses.accessDeny) {
            setError('Ошибка авторизации');
            return;
          }
          modal.close();
        }).catch(() => {
          setError('Ошибка подключения');
        });
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
          Изменить строку
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

export default ModalEditRow;
