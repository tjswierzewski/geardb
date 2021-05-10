import Date from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5
  }
}));
const classes = useStyles;

const TourForm = ({ addTour }) => {
  const postTour = async (tourPayload) => {
    try {
      const response = await fetch('/api/v1/tours', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tourPayload)
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      addtour(responseBody);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      artist: '',
      start_date: null,
      end_date: null
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      artist: Yup.string(),
      start_date: Yup.date().required('Required'),
      end_date: Yup.date().required('Required')
    }),
    onSubmit: (values) => {
      postCase(values);
      formik.resetForm();
    }
  });
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form className={classes.root} onSubmit={formik.handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Name"
            color="secondary"
            variant="outlined"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            id="artist"
            name="artist"
            label="Artist"
            color="secondary"
            variant="outlined"
            fullWidth
            value={formik.values.artist}
            onChange={formik.handleChange}
            error={formik.touched.artist && Boolean(formik.errors.artist)}
            helperText={formik.touched.artist && formik.errors.artist}
          />

          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Start Date"
              value={formik.values.start_date}
              onChange={(value) => formik.setFieldValue('start_date', value)}
              error={formik.touched.artist && Boolean(formik.errors.artist)}
              helperText={formik.touched.artist && formik.errors.artist}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="End Date"
              value={formik.values.end_date}
              onChange={(value) => formik.setFieldValue('end_date', value)}
              error={formik.touched.artist && Boolean(formik.errors.artist)}
              helperText={formik.touched.artist && formik.errors.artist}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </Grid>

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={!formik.dirty}
          >
            Submit
          </Button>
        </form>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default TourForm;
