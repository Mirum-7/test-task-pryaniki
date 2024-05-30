import { TableCell, TableRow } from '@mui/material';
import { TableElementType } from '../../../types/table';
import { tableRowOrder } from '../../../consts/table';
import UtilsMenu from './utilsMenu';
import { parseCellValue } from '../../../utils/table';

function Row ({ row }: { row: TableElementType }) {
  const cells = tableRowOrder.map((cell) => {
    const value = row[cell.prop];
    const parsedValue = parseCellValue(value, cell.type);

    return (
        <TableCell key={cell.prop}>
          {parsedValue}
        </TableCell>
      )
  });

  return (
    <TableRow>
      <TableCell>
        <UtilsMenu row={row}/>
      </TableCell>
      {cells}
    </TableRow>
  )
}

export default Row;