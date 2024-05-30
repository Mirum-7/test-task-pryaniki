import { date, object, string } from 'yup';
import { tableRowOrder, valueTypes } from '../../consts/table';

function buildSchema (type: valueTypes) {
  switch (type) {
    case valueTypes.date: {
      return date().required('Обязательно поле');
    }
    case valueTypes.string: {
      return string().required('Обязательно поле');
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
