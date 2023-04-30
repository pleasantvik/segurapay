import React from "react";
import { useFormik } from "formik";
import { signin } from "./schema";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

interface SignIn {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const initialValues: SignIn = { email: "", password: "" };
  const formik = useFormik({
    initialValues,
    validationSchema: signin,
    onSubmit: (values) => {
      onSubmitForm(values);
    },
  });

  const onSubmitForm = async (values: SignIn) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-[#EFFBFF] h-[100vh] flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="">
          <Image
            src="/asset/images/signin.svg"
            height={400}
            width={400}
            alt="logo"
          />
        </div>
        <div className="bg-white px-8 pt-4 flex flex-col items-start justify-center">
          <Image
            src="/asset/icons/blue-logo.svg"
            height={100}
            width={100}
            alt="logo"
          />
          <h2 className="text-[#1e1d1d] font-semibold text-sm mt-4">
            Welcome back
          </h2>
          <p className="text-sm text-[#525252] mb-4">Good to see you again</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="firstName">Email address</label>
              <input
                id="email"
                type="text"
                className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="firstName">Password</label>
              <input
                id="password"
                type="password"
                className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>
            <p className="flex justify-end text-[#243AC0] font-normal">
              <Link href="forgot-password">Forgot password</Link>
            </p>
            <button className="bg-[#243AC0] flex w-full text-white rounded-md px-4 py-2 items-center justify-center">
              Login
            </button>

            <div className="my-4 before:border-t flex before:flex-1 items-center before:border-[#e8e8e8] after:border-t after:flex-1  after:border-[#e8e8e8]">
              <p className="text-center font-semibold mx-4">or</p>
            </div>
            <button
              className="flex w-full justify-center items-center  text-[#1e1d1d] px-7 py-3 uppercase text-sm font-medium shadow-md hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out rounded border border-[#243AC0]"
              type="button"
            >
              <FcGoogle className="text-2xl bg-[#f6f7f9] mr-2 rounded-full" />
              Login with Google
            </button>
          </form>
          <p>
            Not registered yet?
            <Link href="/register" className="text-[#243AC0]">
              Join Us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
