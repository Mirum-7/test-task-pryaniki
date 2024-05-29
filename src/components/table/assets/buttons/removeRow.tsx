import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { TableElementType } from '../../../../types/table';
import { useRemoveRowMutation } from '../../../../store/slices/table';
function RemoveRowButton ({ id }: { id: TableElementType['id'] }) {
  const [
    remove
  ] = useRemoveRowMutation();

  return (
    <IconButton aria-label="delete" onClick={() => {
      remove(id);
    }}>
      <Delete />
    </IconButton>
  )
}

export default RemoveRowButton;
