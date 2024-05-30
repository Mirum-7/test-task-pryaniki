import { TableElementType } from './table';

export enum modalType {
  addRow = 'addRow',
  editRow = 'editRow',
  none = 'none',
}

interface ModalSelectType<opened extends boolean, type extends modalType, data> {
  opened: opened,
  type: type,
  data: data,
}
interface ModalClose extends ModalSelectType<false, modalType.none, null> {}

interface ModalOpen<type extends Exclude<modalType, modalType.none>, data>
  extends ModalSelectType<true, type, data> {}

export interface ModalEditRow extends ModalOpen<modalType.editRow, TableElementType> {}
export interface ModalAddRow extends ModalOpen<modalType.addRow, null> {}


export type modalState = ModalAddRow | ModalEditRow | ModalClose;
export type openModalState = ModalAddRow | ModalEditRow;