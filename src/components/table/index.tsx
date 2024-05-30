import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { tableRowOrder } from '../../consts/table';
import { useGetTableQuery } from '../../store/slices/table';
import { statuses } from '../../types/response';
import Row from './assets/row';

function CustomTable () {
  const { data: response,
    isLoading,
    isError,
  } = useGetTableQuery();

  if (isLoading) {
    return (
      <Typography>
        Загрузка таблицы
      </Typography>
    )
  }

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

  

  const table = response.data;

  const headNames = tableRowOrder.map((cell) => {
    return (
      <TableCell key={cell.prop}>
        {cell.label}
      </TableCell>
    )
  });

  const dataRows = table.map((row) => <Row key={row.id} row={row}/>)

  return (<>
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
            </TableCell>
            {headNames}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows}
        </TableBody>
      </Table>
    </TableContainer>
  </>)
}

export default CustomTable;