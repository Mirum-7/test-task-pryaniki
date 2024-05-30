export type TableElementType = {
  documentStatus: string,
  companySigDate: string,
  companySignatureName: string,
  documentName: string,
  documentType: string,
  employeeNumber: string
  employeeSigDate: string,
  employeeSignatureName: string,
  id: string,
}

export type TableElementTypeNoId = Omit<TableElementType, 'id'>

type tableType = TableElementType[];

export default tableType;
