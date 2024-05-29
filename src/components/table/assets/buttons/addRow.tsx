import { Button } from '@mui/material';
import { useAddRowMutation } from '../../../../store/slices/table';

function AddRowButton () {
  const testdata = { 
    "companySigDate": "2022-12-23T11:19:27.017Z\t", 
    "companySignatureName": "test", 
    "documentName": "test", 
    "documentStatus": "test", 
    "documentType": "test", 
    "employeeNumber": "test", 
    "employeeSigDate": "2022-12-23T11:19:27.017Z\t", 
    "employeeSignatureName": "test" 
  }

  const [
    addRow
  ] = useAddRowMutation();


  return (
    <Button onClick={() => {
      addRow(testdata);
    }}>Добавить</Button>
  )
}

export default AddRowButton;
