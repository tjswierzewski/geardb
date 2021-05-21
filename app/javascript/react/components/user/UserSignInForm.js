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

const UserSignInForm = ({ handleClose, setUser, setErrors }) => {
  const signInUser = async (userInfo) => {
    try {
      const response = await fetch('/api/v1/auth/sign_in', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });
      switch (response.status) {
        case 200:
          const headers = response.headers;
          const user = {
            accessToken: headers.get('access-token'),
            tokenType: headers.get('token-type'),
            client: headers.get('client'),
            expiry: headers.get('expiry'),
            uid: headers.get('uid')
          };
          setUser(user);
          handleClose();
          break;

        case 401:
          const responseBody = await response.json();
          setErrors(responseBody);
          break;

        default:
          const errorMessage = `${response.status} (${response.statusText})`;
          throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required').email('Please use a valid email'),
      password: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      signInUser(values);
      formik.resetForm();
    }
  });
  return (
    <div>
      <form className={classes.root} onSubmit={formik.handleSubmit}>
        <TextField
          id="email"
          name="email"
          label="Email"
          color="secondary"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          color="secondary"
          type="password"
          fullWidth
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button color="primary" variant="contained" fullWidth type="submit" disabled={!formik.dirty}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserSignInForm;
