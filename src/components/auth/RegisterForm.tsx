import React from "react";
import { useFormik } from "formik";
import { register } from "./schema";
import Image from "next/image";
import Link from "next/link";

interface IRegister {
  password: string;
  organization: string;
  email: string;
  phone: number;
  country: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  industry: string;
}

export const RegisterForm = () => {
  const initialValues: IRegister = {
    password: "",
    organization: "",
    email: "",
    phone: 234,
    country: "",
    jobTitle: "",
    firstName: "",
    lastName: "",
    industry: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: register,
    onSubmit: (values) => {
      onSubmitForm(values);
    },
  });

  const onSubmitForm = async (values: IRegister) => {
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
            Come Join us
          </h2>
          <p className="text-sm text-[#525252] mb-4">
            Join SeguraPay, let’s build financial solutions for Africa and
            beyond.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex gap-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="email">Email Address</label>
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
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500">{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="organization">Organization</label>
                <input
                  id="organization"
                  type="text"
                  className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                  {...formik.getFieldProps("organization")}
                />
                {formik.touched.organization && formik.errors.organization ? (
                  <div className="text-red-500">
                    {formik.errors.organization}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  id="jobTitle"
                  type="text"
                  className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                  {...formik.getFieldProps("jobTitle")}
                />
                {formik.touched.jobTitle && formik.errors.jobTitle ? (
                  <div className="text-red-500">{formik.errors.jobTitle}</div>
                ) : null}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  type="text"
                  className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                  {...formik.getFieldProps("country")}
                />
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-500">{formik.errors.country}</div>
                ) : null}
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="industry">Industry</label>
                <input
                  id="industry"
                  type="text"
                  className="w-full outline outline-1 outline-[#C4C4C4] enabled:focus:border--400 px-4 py-2 text-xl text-gray-700 bg-white border-red-300 rounded transition ease-in-out"
                  {...formik.getFieldProps("industry")}
                />
                {formik.touched.industry && formik.errors.industry ? (
                  <div className="text-red-500">{formik.errors.industry}</div>
                ) : null}
              </div>
            </div>

            <button className="bg-[#243AC0] flex w-full text-white rounded-md px-4 py-2 items-center justify-center">
              Register
            </button>
          </form>
          <p>
            Already registered?
            <Link href="/signin" className="text-[#243AC0]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
