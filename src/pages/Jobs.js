import React, { useState } from "react";
import JobCard from "../components/reusable/JobCard";
import { useGetJobQuery } from "../features/Job/jobApi";

const Jobs = () => {
  const { data, isLoading, isError } = useGetJobQuery();
  console.log(data);
  return (
    <div className="pt-14">
      <div className="bg-gray-100 p-5 mt-10">
        <h1 className="font-semibold text-2xl">Find your Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 p-16  bg-gray-100">
        {data?.data.map((data) => (
          <JobCard key={data._id} jobData={data}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
