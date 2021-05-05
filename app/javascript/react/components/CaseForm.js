import { makeStyles } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const useStyles = makeStyles(() => ({
  error: {
    '& p': {
      color: 'red'
    }
  }
}));
const CaseForm = () => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        prefix: '',
        case_number: '',
        height: '',
        length: '',
        width: '',
        weight: ''
      }}
      validationSchema={Yup.object({
        prefix: Yup.string()
          .required('Required')
          .matches(/[A-Z]{2}/, 'Please use 2 capital letters'),
        case_number: Yup.number()
          .required('Required')
          .integer('Please use a integer')
          .lessThan(1000, 'Use a 3 digit number'),
        height: Yup.number().required('Required'),
        length: Yup.number().required('Required'),
        width: Yup.number().required('Required'),
        weight: Yup.number().required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className={classes.error}>
          <label htmlFor="prefix">Prefix</label>
          <Field name="prefix" type="text" />
          <ErrorMessage component="p" name="prefix" />
        </div>
        <div>
          <label htmlFor="case_number">Case Number</label>
          <Field name="case_number" type="text" />
          <ErrorMessage name="case_number" />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <Field name="height" type="text" />
          <ErrorMessage name="height" />
        </div>
        <div>
          <label htmlFor="length">Length</label>
          <Field name="length" type="text" />
          <ErrorMessage name="length" />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <Field name="width" type="text" />
          <ErrorMessage name="width" />
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <Field name="weight" type="text" />
          <ErrorMessage name="weight" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default CaseForm;
