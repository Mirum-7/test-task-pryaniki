import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../../routes';
import { responseAddType, responseEitType, responseGetType, responseRemoveType } from '../../types/response';
import { TableElementType, TableElementTypeNoId } from '../../types/table';


function getTokenFromStorage () {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }
  return JSON.parse(token);
}

const tableApi = createApi({
  reducerPath: 'table',
  tagTypes: ['table'],
  baseQuery: fetchBaseQuery({
    baseUrl: routes.data,
    prepareHeaders: (headers) => {
      const token = getTokenFromStorage();
      if (token) {
        headers.set('x-auth', token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTable: builder.query<responseGetType, void>({
      query: () => ({
        url: 'get',
      }),
      providesTags: ['table'],
    }),
    addRow: builder.mutation<responseAddType, TableElementTypeNoId>({
      query: (row) => ({
        url: 'create',
        method: 'POST',
        body: row,
      }),
      invalidatesTags: ['table'],
    }),
    removeRow: builder.mutation<responseRemoveType, TableElementType['id']>({
      query: (id) => ({
        url: `delete/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['table'],
    }),
    editRow: builder.mutation<responseEitType, { id: TableElementType['id'], data: TableElementTypeNoId}>({
      query: ({ id, data }) => ({
        url: `set/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['table'],
    }),
  })
})

export const {
  useGetTableQuery,
  useAddRowMutation,
  useRemoveRowMutation,
  useEditRowMutation,
} = tableApi;
export default tableApi;

