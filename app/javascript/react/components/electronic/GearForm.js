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

const GearForm = ({ addElectronic }) => {
  const postElectronic = async (electronicPayload) => {
    try {
      const response = await fetch('/api/v1/electronics', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'access-token': currentUser.accessToken,
          'token-type': currentUser.tokenType,
          client: currentUser.client,
          expiry: currentUser.expiry,
          uid: currentUser.uid
        },
        body: JSON.stringify(electronicPayload)
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      addElectronic(responseBody);
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      manufacture: '',
      model_number: '',
      serial_number: '',
      weight: '',
      cost: '',
      firmware_version: '',
      software_version: '',
      barcode: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      manufacture: Yup.string().required('Required'),
      model_number: Yup.string().required('Required'),
      serial_number: Yup.string().required('Required'),
      weight: Yup.number(),
      cost: Yup.number(),
      firmware_version: Yup.string(),
      software_version: Yup.string(),
      barcode: Yup.number()
    }),
    onSubmit: (values) => {
      postElectronic(values);
      formik.resetForm();
    }
  });
  return (
    <div>
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
          id="manufacture"
          name="manufacture"
          label="Manufacture"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.manufacture}
          onChange={formik.handleChange}
          error={formik.touched.manufacture && Boolean(formik.errors.manufacture)}
          helperText={formik.touched.manufacture && formik.errors.manufacture}
        />

        <TextField
          id="model_number"
          name="model_number"
          label="Model Number"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.model_number}
          onChange={formik.handleChange}
          error={formik.touched.model_number && Boolean(formik.errors.model_number)}
          helperText={formik.touched.model_number && formik.errors.model_number}
        />

        <TextField
          id="serial_number"
          name="serial_number"
          label="Serial_number"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.serial_number}
          onChange={formik.handleChange}
          error={formik.touched.serial_number && Boolean(formik.errors.serial_number)}
          helperText={formik.touched.serial_number && formik.errors.serial_number}
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

        <TextField
          id="cost"
          name="cost"
          label="Cost"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.cost}
          onChange={formik.handleChange}
          error={formik.touched.cost && Boolean(formik.errors.cost)}
          helperText={formik.touched.cost && formik.errors.cost}
        />

        <TextField
          id="frimware_version"
          name="frimware_version"
          label="Frimware Version"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.frimware_version}
          onChange={formik.handleChange}
          error={formik.touched.frimware_version && Boolean(formik.errors.frimware_version)}
          helperText={formik.touched.frimware_version && formik.errors.frimware_version}
        />

        <TextField
          id="software_version"
          name="software_version"
          label="Software Version"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.software_version}
          onChange={formik.handleChange}
          error={formik.touched.software_version && Boolean(formik.errors.software_version)}
          helperText={formik.touched.software_version && formik.errors.software_version}
        />

        <TextField
          id="barcode"
          name="barcode"
          label="Barcode"
          color="secondary"
          variant="outlined"
          fullWidth
          value={formik.values.barcode}
          onChange={formik.handleChange}
          error={formik.touched.barcode && Boolean(formik.errors.barcode)}
          helperText={formik.touched.barcode && formik.errors.barcode}
        />

        <Button color="primary" variant="contained" fullWidth type="submit" disabled={!formik.dirty}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default GearForm;
