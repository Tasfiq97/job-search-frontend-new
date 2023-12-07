import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobsearch-backend-3xsn.onrender.com",
  }),
  tagTypes: ["Jobs", "Job"],
  endpoints: (builder) => ({}),
});
