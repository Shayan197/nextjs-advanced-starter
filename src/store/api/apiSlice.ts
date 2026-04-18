import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    credentials: 'include',
  }),
  tagTypes: ['User', 'Post'], // Cache invalidation ke liye
  endpoints: (builder) => ({
    // // Example endpoint (replace or extend)
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
  }),
});

// Auto-generated hooks export karo
export const { useGetUsersQuery } = apiSlice;
