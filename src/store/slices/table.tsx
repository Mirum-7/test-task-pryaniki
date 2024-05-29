import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../../routes';
import { responseGetType } from '../../types/response';
import { TableElementType } from '../../types/table';


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
    addRow: builder.mutation({
      query: (row: Omit<TableElementType, 'id'>) => ({
        url: 'create',
        method: 'POST',
        body: row,
      }),
      invalidatesTags: ['table'],
    }),
    removeRow: builder.mutation({
      query: (id: TableElementType['id']) => ({
        url: `delete/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['table'],
    }),
  })
})

export const {
  useGetTableQuery,
  useAddRowMutation,
  useRemoveRowMutation,
} = tableApi;
export default tableApi;

