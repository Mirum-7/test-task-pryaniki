export enum valueTypes {
  string,
  date,
}

export type cell = {
  prop: string,
  type: valueTypes,
  label: string,
}

export const tableRowOrder = [
  {
    prop: 'companySigDate',
    type: valueTypes.date,
    label: 'Дата подписания компании',
  },
  {
    prop: 'companySignatureName',
    type: valueTypes.string,
    label: 'Имя компании',
  },
  {
    prop: 'documentName',
    type: valueTypes.string,
    label: 'Имя документа',
  },
  {
    prop: 'documentStatus',
    type: valueTypes.string,
    label: 'Статус документа',
  },
  {
    prop: 'documentType',
    type: valueTypes.string,
    label: 'Тип документа',
  },
  {
    prop: 'employeeNumber',
    type: valueTypes.string,
    label: 'Количество работников',
  },
  {
    prop: 'employeeSigDate',
    type: valueTypes.date,
    label: 'Дата подписания сотрудников',
  },
  {
    prop: 'employeeSignatureName',
    type: valueTypes.string,
    label: 'Имя подписи сотрудников',
  },
] as const;