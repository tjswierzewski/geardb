import { Button, makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup';
import { UserContext } from '../UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 5
  }
}));
const classes = useStyles;

const UserForm = ({ handleClose, setErrors }) => {
  const { setUser } = useContext(UserContext);
  const postUser = async (userInfo) => {
    const userPayload = { ...userInfo, confirm_success_url: '/' };
    try {
      const response = await fetch('/api/v1/auth', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPayload)
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

        case 422:
          const responseBody = await response.json();
          setErrors(responseBody.errors.full_messages);
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
      password: '',
      password_confirmation: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required').email('Please use a valid email'),
      password: Yup.string().required('Required'),
      password_confirmation: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      postUser(values);
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

        <TextField
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          color="secondary"
          type="password"
          fullWidth
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
          error={formik.touched.password_confirmation && Boolean(formik.errors.password_confirmation)}
          helperText={formik.touched.password_confirmation && formik.errors.password_confirmation}
        />

        <Button color="primary" variant="contained" fullWidth type="submit" disabled={!formik.dirty}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
