import tableType from './table';

export enum statuses {
  accessDeny = 2004,
  ok =  0,
};

type response<data> = {
  error_code: statuses,
  data: data,
}

export type responseLoginType = response<{ token: string }>;
export type responseGetType = response<tableType>;
