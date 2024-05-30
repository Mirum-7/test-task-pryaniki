import { TableElementType } from './table';

export enum modalType {
  addRow = 'addRow',
  editRow = 'editRow',
  none = 'none',
}

interface ModalTypeSelect<type> {
  opened: boolean,
  type: type,
}
interface ModalEditRow extends ModalTypeSelect<modalType.editRow> {
  opened: true,
  data: TableElementType;
}
interface ModalOther extends ModalTypeSelect<Exclude<modalType, modalType.editRow>> {
  data: null,
}


export type modalState = ModalEditRow | ModalOther;
