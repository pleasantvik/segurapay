import React from "react";
import { useFormik } from "formik";
import { forgotPassword } from "./schema";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/router";

interface IForgotPassword {
  email: string;
}

export const ForgotPasswordForm = () => {
  const initialValues: IForgotPassword = { email: "" };
  const router = useRouter();
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPassword,
    onSubmit: (values) => {
      onSubmitForm(values);
    },
  });

  const onSubmitForm = async (values: IForgotPassword) => {
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
            Forgot Password?
          </h2>
          <p className="text-sm text-[#525252] mb-4">
            Enter the Email associated with your account. <br /> A verification
            code would be sent to you.
          </p>
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

            <button
              onClick={() => router.push("/reset-password")}
              className="bg-[#243AC0] flex w-full text-white rounded-md px-4 py-2 items-center justify-center"
            >
              Reset Password
            </button>
          </form>
          <p>
            Remember your password?
            <Link href="/signin" className="text-[#243AC0]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
