import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";
import { googleSignIn, loginUser } from "../features/auth/authSlice";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const {
    isLoading,
    isError,
    error,
    user: { email },
  } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };
  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [isLoading, email]);
  const handleGoogleSignIn = () => {
    dispatch(googleSignIn()).then((action) => console.log(action));
  };

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);

  return (
    <div className="flex max-h-screen items-center bg-gray-400 p-6">
      <div className="w-1/2 mt-20 mb-10">
        <img src={loginImage} className="h-full w-[80%]" alt="" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-white shadow-2xl rounded-lg grid place-items-center p-10 ">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input type="email" {...register("email")} id="email" />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input type="password" id="password" {...register("password")} />
              </div>
              <div className="relative !mt-8">
                <button type="submit" className="font-bold text-white py-3 rounded-full bg-primary w-full">
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span className="text-primary hover:underline cursor-pointer" onClick={() => navigate("/signup")}>
                    Sign up
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className="font-bold text-white py-3 rounded-full bg-primary w-full"
                onClick={handleGoogleSignIn}
              >
                Signup with google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
