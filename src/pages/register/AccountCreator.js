import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import candidate from "../../assets/candidate.svg";
import employer from "../../assets/employer.svg";
import CandidateRegistration from "./CandidateRegistration";
import EmployerRegistration from "./EmployerRegistration";

const AccountCreator = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  if (type === "candidate") {
    return <CandidateRegistration />;
  }

  if (type === "employer") {
    return <EmployerRegistration />;
  }

  return (
    <div className="h-screen pt-14">
      <h1 className="text-center my-10 text-2xl">
        How Do you want to Continue ...
      </h1>
      <div className="flex justify-evenly ">
        <div
          onClick={() => navigate("/register/candidate")}
          className=" cursor-pointer flex h-[500px] bg-slate-300 flex-col justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-5/6" src={candidate} alt="" />
          <p className="text-center text-3xl"> As a Candidate</p>
        </div>
        <div
          onClick={() => navigate("/register/employer")}
          className=" cursor-pointer flex flex-col bg-slate-600   h-[500px] justify-between transition-all rounded-lg p-5 border border-white hover:border-primary hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-[77%]" src={employer} alt="" />
          <p className="text-center text-white text-3xl">As an Employer</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCreator;
