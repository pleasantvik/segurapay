import * as Yup from "yup";

export const signin = Yup.object({
  email: Yup.string()
    .trim()
    .required("The email field cannot be empty")
    .email("The inputed email is invalid"),
  password: Yup.string()
    .trim()
    .required("The password field cannot be empty")
    .min(8, "Password should be minimum of 8 character"),
});
export const register = Yup.object({
  email: Yup.string()
    .trim()
    .required("The email field cannot be empty")
    .email("The inputed email is invalid"),
  password: Yup.string()
    .trim()
    .required("The password field cannot be empty")
    .min(8, "Password should be minimum of 8 character"),
  firstName: Yup.string()
    .trim()
    .required("The first name field cannot be empty"),
  lastName: Yup.string().trim().required("The last name field cannot be empty"),
  phone: Yup.number().required("The phone number field cannot be empty"),
  organization: Yup.string(),
  jobTitle: Yup.string(),
  country: Yup.string(),
  industry: Yup.string(),
});
export const resetPassword = Yup.object({
  password: Yup.string()
    .trim()
    .required("The password field cannot be empty")
    .min(8, "Password should be minimum of 8 character"),
  confirmPassword: Yup.string()
    .trim()
    .required("The password field cannot be empty")
    .min(8, "Password should be minimum of 8 character"),
});
export const forgotPassword = Yup.object({
  email: Yup.string()
    .trim()
    .required("The email field cannot be empty")
    .email("The inputed email is invalid"),
});
