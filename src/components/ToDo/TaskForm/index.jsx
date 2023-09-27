import React from "react";
import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import InputText from "../InputText";
import { SIGN_UP_TASK_SCHEMA } from "../../../utils/validationSchemas";
import styles from "./TaskForm.module.scss"

const initialValues = {
  body: "",
};

const TaskForm = ({ addTask }) => {
  const onSubmit = (values, formikBag) => {
    addTask(values);
    formikBag.resetForm();
  };
  return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SIGN_UP_TASK_SCHEMA}
      >
        <Form>
          <InputText name="body" />
          <input type="submit" value="+" />
        </Form>
      </Formik>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func,
};

export default TaskForm;
