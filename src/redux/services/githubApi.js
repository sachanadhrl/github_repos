import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({ query: (searchTerm) => `/search/users?q=${searchTerm}` }),
    getUserByUsername: builder.query({ query: ({ username }) => `/users/${username}` }),
    getReposByUsername: builder.query({ query: ({ username }) => `/users/${username}/repos` })
  })
})

export const {
  useGetUsersQuery,
  useGetUserByUsernameQuery,
  useGetReposByUsernameQuery
} = githubApi