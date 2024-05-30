import useModal from '../../hooks/modal';
import { modalType } from '../../types/modal';
import ModalAddRow from './addRow';
import ModalEditRow from './editRow';

function RenderModals () {
  const { state } = useModal();

  if (!state.opened) {
    return null;
  }

  switch (state.type) {
    case modalType.addRow: {
      return <ModalAddRow opened={state.opened}/>
    }
    case modalType.editRow: {
      return <ModalEditRow opened={state.opened} data={state.data}/>
    }
    default: {
      throw new Error(`unknown modal type`);
    }
  }
};

export default RenderModals;
