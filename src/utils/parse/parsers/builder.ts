import { getType, valueTypes } from '../../../consts/table';
import { parseToDisplayDate } from './date';

export function buildParserToDisplayType(type: valueTypes) {
  switch (type) {
    case valueTypes.date: {
      return parseToDisplayDate;
    }
    case valueTypes.string: {
      return  (value: getType[valueTypes.string]) => value
    }
    default: {
      return (value: getType[valueTypes.string]) => value
    }
  }
}