import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useGetTableQuery } from '../../store/slices/table';
import { TableElementType } from '../../types/table';
import AddRowButton from './assets/buttons/addRow';
import EditRowButton from './assets/buttons/editRow';
import RemoveRowButton from './assets/buttons/removeRow';
import { statuses } from '../../types/response';
import EditableRow from './assets/editableRow';
import parseDate from '../../utils/parseDate';

function Row ({ data }: { data: TableElementType }) {
  return (
    <TableRow>
      <TableCell sx={{ display: 'flex' }}>
        <RemoveRowButton id={data.id}/>
        <EditRowButton/>
      </TableCell>
      <TableCell>{parseDate(data.companySigDate)}</TableCell>
      <TableCell>{data.companySignatureName}</TableCell>
      <TableCell>{data.documentName}</TableCell>
      <TableCell>{data.documentStatus}</TableCell>
      <TableCell>{data.documentType}</TableCell>
      <TableCell>{data.employeeNumber}</TableCell>
      <TableCell>{parseDate(data.employeeSigDate)}</TableCell>
      <TableCell>{data.employeeSignatureName}</TableCell>
    </TableRow>
  )
}

function CustomTable () {
  const { data: response,
    isLoading,
    isError,
  } = useGetTableQuery();

  if(isError || !response) {
    return (
      <Typography>
        Не удалось загрузить данные, проверьте подключение к интернету
      </Typography>
    )
  }

  if(response.error_code === statuses.accessDeny) {
    return (
      <Typography>
        Ошибка авторизации, попробуйте войти заново
      </Typography>
    )
  }

  if (isLoading) {
    return null
  }

  const table = response.data;

  return (<>
    <TableContainer>
      <AddRowButton/>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>companySigDate</TableCell>
            <TableCell>companySignatureName</TableCell>
            <TableCell>documentName</TableCell>
            <TableCell>documentStatus</TableCell>
            <TableCell>documentType</TableCell>
            <TableCell>employeeNumber</TableCell>
            <TableCell>employeeSigDate</TableCell>
            <TableCell>employeeSignatureName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row) => <Row key={row.id} data={row}/>)}
          <EditableRow/> 
        </TableBody>
      </Table>
    </TableContainer>
  </>)
}

export default CustomTable;