import { valueTypes } from '../consts/table';

export function parseCellValue(value: string, type: valueTypes) {
  switch (type) {
    case valueTypes.date: {
      return new Date(value).toLocaleString();
    }
    default: {
      return value;
    }
  }
}

export function transformCellValue(value: string, type: valueTypes) {
  switch (type) {
    case valueTypes.date: {
      return new Date(value).toISOString();
    }
    default: {
      return value;
    }
  }
}
