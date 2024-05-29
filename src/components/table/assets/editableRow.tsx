import { Check } from '@mui/icons-material';
import { IconButton, Input, TableCell, TableRow } from '@mui/material';
import { useFormik } from 'formik';
import { useCallback } from 'react';
import { useAddRowMutation } from '../../../store/slices/table';
import { TableElementType } from '../../../types/table';
import { date, object, string } from 'yup';

const validationSchema = object<Omit<TableElementType, 'id'>>({
  companySigDate: date().required(),
  companySignatureName: string().required(),
  documentName: string().required(),
  documentStatus: string().required(),
  documentType: string().required(),
  employeeNumber: string().required(),
  employeeSigDate: date().required(),
  employeeSignatureName: string().required(),
});

function EditableRow ({ initialValues }: { initialValues?: Omit<TableElementType, 'id'> }) {
  const [
    addRow
  ] = useAddRowMutation();

  const formik = useFormik<Omit<TableElementType, 'id'>>({
    initialValues: initialValues ?? {
      companySigDate: "",
      companySignatureName: '',
      documentName: '',
      documentStatus: '',
      documentType: '',
      employeeNumber: '',
      employeeSigDate: "",
      employeeSignatureName: 'asd',
    },
    validationSchema,
    onSubmit: (values) => {
      addRow(values);
    }
  })

  const submitHandler = useCallback(() => {
    formik.handleSubmit();
  }, []);

  return (
    <TableRow>
      <TableCell>
        <IconButton type='submit' onClick={submitHandler}>
          <Check />
        </IconButton>
      </TableCell>
      <TableCell>
        <Input
          type="datetime-local"
          id="companySigDate"
          name="companySigDate"
          value={formik.values.companySigDate}
          onChange={formik.handleChange}
        />
      </TableCell>
      <TableCell>
        <Input
          id="companySignatureName"
          name="companySignatureName"
          value={formik.values.companySignatureName}
          onChange={formik.handleChange}
        />
      </TableCell>
      <TableCell>
        <Input
          error={!!formik.errors.documentStatus}
          id="documentName"
          name="documentName"
          value={formik.values.documentName}
          onChange={formik.handleChange}
        />
      </TableCell>
      <TableCell>
        <Input
          error={!!formik.errors.documentStatus}
          id="documentStatus"
          name="documentStatus"
          value={formik.values.documentStatus}
          onChange={formik.handleChange}
        />
      </TableCell>
      <TableCell>
        <Input
          id="documentType"
          name="documentType"
          value={formik.values.documentType}
          onChange={formik.handleChange}
        />
      </TableCell>
      <TableCell>
        <Input
          id="employeeNumber"
          name="employeeNumber"
          value={formik.values.employeeNumber}
          onChange={formik.handleChange}
        />
      </TableCell>
      <TableCell>
        <Input
          id="employeeSigDate"
          name="employeeSigDate" 
          type="datetime-local" 
          value={formik.values.employeeSigDate}
          onChange={formik.handleChange}
        />
      </TableCell>
      <TableCell>
        <Input
          id="employeeSignatureName"
          name="employeeSignatureName"
          value={formik.values.employeeSignatureName}
          onChange={formik.handleChange}
        />
      </TableCell>
    </TableRow>
  )
}

export default EditableRow;