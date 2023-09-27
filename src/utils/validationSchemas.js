import * as Yup from "yup";

export const SIGN_UP_TASK_SCHEMA = Yup.object({
  body: Yup.string("Value must be string")
    .trim()
    .required("Required!")
    .matches(/^.{2,64}$/, "The task must contain from 2 to 64 characters"),
});
