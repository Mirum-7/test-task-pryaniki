import { object, string } from 'yup';
import { tableRowOrder, valueTypes } from '../../consts/table';

const dateRegExp = /[0-3][0-9]\.[0-1][0-9].[0-9][0-9][0-9][0-9], [0-2][0-9]:[0-5][0-9]:[0-5][0-9]/

function buildSchema (type: valueTypes) {
  switch (type) {
    case valueTypes.date: {
      return string().matches(dateRegExp).required();
    }
    case valueTypes.string: {
      return string().required();
    }
    default: {
      throw new Error(`unknown schema type: ${type}`);
    }
  }
}

const template = tableRowOrder.reduce((sub, cell) => {
  sub[cell.prop] = buildSchema(cell.type);
  return sub;
}, {} as any);

export const validationSchema = object(template);