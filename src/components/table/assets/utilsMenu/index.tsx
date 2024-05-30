import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react';
import useModal from '../../../../hooks/modal';
import { useRemoveRowMutation } from '../../../../store/slices/table';
import { TableElementType } from '../../../../types/table';
import { modalType } from '../../../../types/modal';

function UtilsMenu ({ row }: { row: TableElementType }) {
  const [
    removeRow,
  ] = useRemoveRowMutation();

  const modal = useModal();


  // open menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // callback
  function closeHandler () {
    setAnchorEl(null);
  };

  function removeHandler () {
    removeRow(row.id);
    closeHandler();
  }

  function editHandler () {
    modal.open({ type:  modalType.editRow, data: row });
    closeHandler();
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
      >
        <MoreVert/>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={closeHandler}
      >
        <MenuItem onClick={removeHandler}>
          <Delete/>
          Удалить
        </MenuItem>
        <MenuItem onClick={editHandler}>
          <Edit/>
          Изменить
        </MenuItem>
      </Menu>
    </>
  )
}

export default UtilsMenu;
