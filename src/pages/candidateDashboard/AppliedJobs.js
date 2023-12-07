import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";
import { useGetAppliedJobQuery } from "../../features/Job/jobApi";

const AppliedJobs = () => {
  
  const {
    user: { email },
  } = useSelector((state) => state.auth);

 const {data,isLoading}=useGetAppliedJobQuery(email);
  if (isLoading) {
    return <Loading />;
  }
console.log(data.data);
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className='text-xl py-5 ml-10  '>Applied jobs</h1>
  
      <div className='grid grid-cols-2 gap-5 pb-5'>
        {data?.data?.map((job) => (
          <JobCard jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
