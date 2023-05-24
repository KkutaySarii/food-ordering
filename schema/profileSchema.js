import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 characters.")
    .required("Phone number is required."),
  address: Yup.string()
    .min(3, "Address must be at least 3 characters.")
    .required("Address is required."),
  job: Yup.string().required("Job is required."),
  bio: Yup.string().required("Bio is required."),
});
