"use client"
import { Grid, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import React from 'react';
import { Formik, Form, Field } from 'formik';

const LoginPage = () => {
  const handleSubmit = (values) => {
    console.log(values); // You can handle form submission here
    // Example: Send formData to your backend for authentication
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '90vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Card variant="outlined" style={{ borderRadius: "20px" }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <Formik
              initialValues={{ username: '', password: '' }}
              onSubmit={handleSubmit}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = 'Required';
                }
                if (!values.password) {
                  errors.password = 'Required';
                }
                return errors;
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field name="username">
                    {({ field, meta }) => (
                      <TextField
                        {...field}
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        error={meta.touched && meta.error}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <TextField
                        {...field}
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        error={meta.touched && meta.error}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                  <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginBottom: '10px' }} disabled={isSubmitting}>
                    {isSubmitting ? 'Logging in...' : 'Login/Sign in'}
                  </Button>
                  <Button variant="contained" color="primary" fullWidth disabled={isSubmitting}>
                    Continue with Google
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginPage;