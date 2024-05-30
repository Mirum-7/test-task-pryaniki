import { valueTypes } from '../../consts/table';
import { buildParserToDisplayType } from './parsers/builder';

export function parseDisplayCellValue(value: string, type: valueTypes) {
  return buildParserToDisplayType(type)(value);
}

