import { getType, valueTypes } from '../../../consts/table';

export function parseToDisplayDate (value: getType[valueTypes.string]) {
  return new Date(value).toLocaleString();
}