import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobCard = ({ jobData }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    _id,
    position,
    companyName,
    location,
    employmentType,
    applicants,
    overview,
  } = jobData || {};
  console.log(jobData.applicants);
  return (
    <div
      key={_id}
      className="bg-white  border border-gray-300 shadow-xl p-5 rounded-2xl text-primary"
    >
      <div className="flex justify-between  text-primary">
        <div>
          <p className="text-xl font-bold">{position}</p>
          <small className="text-primary/70 ">
            by{" "}
            <span className="font-semibold hover:text-primary cursor-pointer hover:underline transition-all">
              {companyName}
            </span>
          </small>
        </div>
        <p>{location}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p>{employmentType} time</p>
        {pathname.includes("applied-jobs") && (
          <button
            disabled
            className="btn"
            onClick={() => navigate(`/job-details/${_id}`)}
          >
            applied
          </button>
        )}
        {!pathname.includes("applied-jobs") && (
          <button
            className="btn"
            onClick={() => navigate(`/job-details/${_id}`)}
          >
            details
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
