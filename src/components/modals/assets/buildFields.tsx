import { TextField } from '@mui/material';
import { FormikErrors, FormikValues, useFormik } from 'formik';
import { tableRowOrder } from '../../../consts/table';

function BuildFields<T extends FormikValues>({ formik }: { formik: ReturnType<typeof useFormik<T>>}) {
  return (
    <>
      {
      tableRowOrder.map((cell) => {
        return (
          <TextField
            id={cell.prop}
            key={cell.prop}
            name={cell.prop}
            label={cell.label}
            error={!!formik.errors[cell.prop]}
            helperText={formik.errors[cell.prop] as FormikErrors<string>}
            value={formik.values[cell.prop]}
            margin="normal"
          />
        );
      })
    }
    </>
  );
}

export default BuildFields;
