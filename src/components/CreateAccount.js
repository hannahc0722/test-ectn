import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import '../styles/CreateAccount.css';

const CreateAccount = () => {
  return (
    <div className="container">
      <h2>Create Your Account</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            console.log("Submitting form with values:", values);

            const userCredential = await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            const user = userCredential.user;

            // Store user information in Firestore
            await setDoc(doc(db, 'users', user.uid), {
              email: values.email
            });

            alert(`User ${user.email} created successfully!`);
          } catch (error) {
            console.error("Error creating user:", error);
            alert(error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Form>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field name="confirmPassword" type="password" />
          <ErrorMessage name="confirmPassword" />

          <button type="submit">Create Account</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateAccount;
