import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useGetTableQuery } from '../../store/slices/table';
import { TableElementType } from '../../types/table';
import AddRowButton from './assets/buttons/addRow';
import EditRowButton from './assets/buttons/editRow';
import RemoveRowButton from './assets/buttons/removeRow';

function Row ({ data }: { data: TableElementType }) {
  return (
    <TableRow>
      <TableCell sx={{
        display: 'flex',
      }}>
        <RemoveRowButton id={data.id}/>
        <EditRowButton/>
      </TableCell>
      <TableCell>{data.companySigDate}</TableCell>
      <TableCell>{data.companySignatureName}</TableCell>
      <TableCell>{data.documentName}</TableCell>
      <TableCell>{data.documentStatus}</TableCell>
      <TableCell>{data.documentType}</TableCell>
      <TableCell>{data.employeeNumber}</TableCell>
      <TableCell>{data.employeeSigDate}</TableCell>
      <TableCell>{data.employeeSignatureName}</TableCell>
    </TableRow>
  )
}

function CustomTable () {
  const { data, isLoading } = useGetTableQuery();

  if (!data || !data.data || isLoading) {
    return null
  }

  const table = data.data;

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {table.map((row) => <Row key={row.id} data={row}/>)}
        </TableBody>
      </Table>
      <AddRowButton/>
    </TableContainer>
  )
}

export default CustomTable;