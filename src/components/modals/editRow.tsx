import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { tableRowOrder, valueTypes } from '../../consts/table';
import useModal from '../../hooks/modal';
import { useEditRowMutation } from '../../store/slices/table';
import { TableElementType, TableElementTypeNoId } from '../../types/table';
import { parseCellValue, transformCellValue } from '../../utils/table';
import { validationSchema } from './validationSchema';

function ModalEditRow ({ opened, data }: { opened: boolean, data: TableElementType }) {
  const modal = useModal();

  const [
    editRow,
  ] = useEditRowMutation();

  const { id, ...rest } = data;
  const initialValues = tableRowOrder.reduce<TableElementTypeNoId>((sub, cell) => {
    sub[cell.prop] = parseCellValue(rest[cell.prop], cell.type);
    return sub;
  }, {} as TableElementTypeNoId);

  const formik = useFormik({
    initialValues, 
    validationSchema,
    onSubmit(values) {
        const transformedValue = tableRowOrder.reduce<TableElementTypeNoId>((sub, cell) => {
          sub[cell.prop] = transformCellValue(values[cell.prop], cell.type);
          return sub;
        }, {} as TableElementTypeNoId);

        editRow({
          id: id,
          data: transformedValue,
        });
    },
  });

  const inputs = tableRowOrder.map((cell) => {
    switch (cell.type) {
      case valueTypes.date: {
        return <Input type='datetime-local' />
      }
      case valueTypes.string: {
        return (
          <TextField
            id={cell.prop}
            key={cell.prop}
            name={cell.prop}
            label={cell.label}
            value={formik.values[cell.prop]}
            margin="normal"
          />
        );
      }
    }
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
          Изменить строку
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

export default ModalEditRow;
