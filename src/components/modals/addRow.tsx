import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { tableRowOrder } from '../../consts/table';
import { useAddRowMutation } from '../../store/slices/table';
import { TableElementTypeNoId } from '../../types/table';
import useModal from '../../hooks/modal';
import { transformCellValue } from '../../utils/table';
import { validationSchema } from './validationSchema';

function getInitialValues () {
  const initialValues = {} as TableElementTypeNoId;
  tableRowOrder.forEach((cell) => {
    initialValues[cell.prop] = '';
  })
  return initialValues;
}

function ModalAddRow ({ opened }: { opened: boolean }) {
  const modal = useModal();

  const [
    addRow,
  ] = useAddRowMutation();

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema,
    onSubmit(values) {
      const transformedValue = tableRowOrder.reduce<TableElementTypeNoId>((sub, cell) => {
        sub[cell.prop] = transformCellValue(values[cell.prop], cell.type);
        return sub;
      }, {} as TableElementTypeNoId);
      addRow(transformedValue);
    },
  });

  const inputs = tableRowOrder.map((cell) => {
    return (
      <TextField
        id={cell.prop}
        key={cell.prop}
        name={cell.prop}
        label={cell.label}
        value={formik.values[cell.prop]}
        error={!!formik.errors[cell.prop]}
        helperText={formik.errors[cell.prop]}
        margin="normal"
      />
    )
  })

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
          {inputs}
        </DialogContent>
        <DialogActions>
          <Button type="submit">
            Сохранить
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default ModalAddRow;
