import { cellProps, getType, valueTypes } from '../consts/table';

export type TableElementTypeNoId = {
  [P in cellProps]: getType[valueTypes.string];
};

export interface TableElementType extends TableElementTypeNoId {
  id: string,
}

// хотел сделать дженерик, но я пака не нашел как
// export type ParsedTableElementType = {
//   [(p i cell)['prop']]: getType[p['type']]
// }
// но я не знаю как передать P в правую часть 
export type ParsedTableElementType = {
  companySigDate: getType[valueTypes.date];
  companySignatureName: getType[valueTypes.string];
  documentName: getType[valueTypes.string];
  documentStatus: getType[valueTypes.string];
  documentType: getType[valueTypes.string];
  employeeNumber: getType[valueTypes.string];
  employeeSigDate: getType[valueTypes.date];
  employeeSignatureName: getType[valueTypes.string];
}


type tableType = TableElementType[];

export default tableType;
