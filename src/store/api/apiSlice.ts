import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    prepareHeaders: (headers) => {
      // Auth token add karna ho toh yahan karo
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Post'], // Cache invalidation ke liye
  endpoints: (builder) => ({
    // Example endpoint
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
  }),
});

// Auto-generated hooks export karo
export const { useGetUsersQuery } = apiSlice;
