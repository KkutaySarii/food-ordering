import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string()
    .required("Location is required.")
    .min(3, "Location must be at least 3 characters."),
  email: Yup.string().required("Email is required.").email("Invalid email."),
  phoneNumber: Yup.string()
    .max(11, "Phone number must be at most 11 characters.")
    .required("Phone number is required."),
  desc: Yup.string()
    .required("Description is required.")
    .min(10, "Description must be at least 10 characters.")
    .max(300, "Description must be at most 300 characters."),
  openingDay: Yup.string().required("Date is required."),
  openingTime: Yup.string().required("Time is required."),
});
