import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 characters.")
    .required("Phone number is required."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  personCount: Yup.number().required("Number of persons is required."),
  date: Yup.date().required("Date is required."),
});
