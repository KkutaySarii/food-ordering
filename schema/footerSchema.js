import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string()
    .required("Location is required.")
    .min(3, "Location must be at least 3 characters."),
  email: Yup.string().required("Email is required.").email("Invalid email."),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 characters.")
    .required("Phone number is required."),
  description: Yup.string()
    .required("Description is required.")
    .min(10, "Description must be at least 10 characters."),
  day: Yup.date().required("Date is required."),
  time: Yup.date().required("Time is required."),
});
