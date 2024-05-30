import tableType, { TableElementType } from './table';

export enum statuses {
  accessDeny = 2004,
  ok =  0,
};

interface responseStatusSelect<data, status> {
  error_code: status,
  data: data,
}

interface responseSuccess<data> extends responseStatusSelect<data, statuses.ok> {

}

interface responseDeny extends responseStatusSelect<null, statuses.accessDeny> {

}

type response<data> = responseDeny | responseSuccess<data>;

export type responseLoginType = response<{ token: string }>;
export type responseGetType = response<tableType>;
export type responseAddType = response<TableElementType>;
export type responseRemoveType = response<void>;
export type responseEitType = response<TableElementType>;
