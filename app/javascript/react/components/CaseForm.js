import { Button, makeStyles, TextField } from '@material-ui/core';
import { FormikConsumer, useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5
  }
}));
const classes = useStyles;

const CaseForm = () => {
  const formik = useFormik({
    initialValues: {
      prefix: '',
      case_number: '',
      height: '',
      length: '',
      width: '',
      weight: ''
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <div>
      <form className={classes.root} onSubmit={formik.handleSubmit}>
        <TextField
          error={Boolean(formik.errors.prefix)}
          color="secondary"
          variant="standard"
          fullWidth
          id="prefix"
          name="prefix"
          label="Prefix"
          value={formik.values.prefix}
          error={formik.touched.prefix && Boolean(formik.errors.prefix)}
          helperText={
            formik.touched.prefix && formik.errors.prefix ? FormikConsumer.errors.prefix : ''
          }
        />
        <TextField
          color="secondary"
          error={Boolean(formik.errors.case_number)}
          variant="outlined"
          fullWidth
          id="case_number"
          name="case_number"
          label="Case Number"
          value={formik.values.case_number}
          onChange={formik.handleChange}
          error={formik.touched.case_number && Boolean(formik.errors.case_number)}
          helperText={formik.touched.case_number && formik.errors.case_number}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CaseForm;
