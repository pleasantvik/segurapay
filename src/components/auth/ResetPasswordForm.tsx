import React from "react";
import { useFormik } from "formik";
import { resetPassword } from "./schema";
import Image from "next/image";
import Link from "next/link";

interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordForm = () => {
  const initialValues: IResetPassword = { password: "", confirmPassword: "" };
  const formik = useFormik({
    initialValues,
    validationSchema: resetPassword,
    onSubmit: (values) => {
      onSubmitForm(values);
    },
  });

  const onSubmitForm = async (values: IResetPassword) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-[#EFFBFF] h-[100vh] flex items-center justify-center mx-auto">
      <div className="flex">
        <div className="sm:flex-[40%]">
          <Image
            src="/asset/images/signin.svg"
            height={400}
            width={400}
            alt="logo"
            className=""
          />
        </div>
        <div className="bg-white sm:flex-[60%] px-8 pt-4 flex flex-col items-start justify-center">
          <Image
            src="/asset/icons/blue-logo.svg"
            height={100}
            width={100}
            alt="logo"
          />
          <h2 className="text-[#1e1d1d] font-semibold text-sm mt-4">
            Welcome back
          </h2>
          <p className="text-sm text-[#525252] mb-4">
            Set a new password to proceed
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-4">
              <label htmlFor="password">New Password</label>
              <input
                id="password"
                type="text"
                className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="text"
                className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>

            <button className="bg-[#243AC0] flex w-full text-white rounded-md px-4 py-2 items-center justify-center">
              Save and Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
