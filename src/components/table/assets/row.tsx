import { TableCell, TableRow } from '@mui/material';
import { tableRowOrder } from '../../../consts/table';
import { TableElementType } from '../../../types/table';
import { parseDisplayCellValue } from '../../../utils/parse/table';
import UtilsMenu from './utilsMenu';

function Row ({ row }: { row: TableElementType }) {
  const cells = tableRowOrder.map((cell) => {
    const value = row[cell.prop];
    const parsedValue = parseDisplayCellValue(value, cell.type);

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