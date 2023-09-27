import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';
import cx from "classnames";
import styles from "./InputText.module.scss"
import PropTypes from "prop-types";

const InputText = (props) => {
  const [field, meta] = useField(props);
  const classNames = cx(styles.input, {
    [styles.invalid]: meta.touched && meta.error,
  });
  return (
    <span>
      <Field name={props.name}>
        {() => {
          return <input {...field} className={classNames} />;
        }}
      </Field>
      <ErrorMessage
        component="div"
        name={props.name}
        className={styles.error}
      />
    </span>
  );
};

InputText.propTypes = {
  name: PropTypes.string,
};


export default InputText;
