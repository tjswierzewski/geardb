import { Button, makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
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
          id="prefix"
          name="prefix"
          label="Prefix"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.prefix}
          error={formik.touched.prefix && Boolean(formik.errors.prefix)}
          helperText={formik.touched.prefix && formik.errors.prefix ? formik.errors.prefix : ''}
        />

        <TextField
          id="case_number"
          name="case_number"
          label="Case Number"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.case_number}
          onChange={formik.handleChange}
          error={formik.touched.case_number && Boolean(formik.errors.case_number)}
          helperText={formik.touched.case_number && formik.errors.case_number}
        />

        <TextField
          id="height"
          name="height"
          label="Height"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.height}
          onChange={formik.handleChange}
          error={formik.touched.height && Boolean(formik.errors.height)}
          helperText={formik.touched.height && formik.errors.height}
        />

        <TextField
          id="length"
          name="length"
          label="Length"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.length}
          onChange={formik.handleChange}
          error={formik.touched.length && Boolean(formik.errors.length)}
          helperText={formik.touched.length && formik.errors.length}
        />

        <TextField
          id="width"
          name="width"
          label="Width"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.width}
          onChange={formik.handleChange}
          error={formik.touched.width && Boolean(formik.errors.width)}
          helperText={formik.touched.width && formik.errors.width}
        />
        <TextField
          id="weight"
          name="weight"
          label="Weight"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.weight}
          onChange={formik.handleChange}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CaseForm;
