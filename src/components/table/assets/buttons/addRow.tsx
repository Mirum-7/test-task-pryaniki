import { LoadingButton } from '@mui/lab';
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
    addRow,
    { isLoading }
  ] = useAddRowMutation();


  return (
    <LoadingButton 
    loading={isLoading}
    onClick={() => {
      addRow(testdata);
    }}
    >
      Добавить
    </LoadingButton>
  )
}

export default AddRowButton;
