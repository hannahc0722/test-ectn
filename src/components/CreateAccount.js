import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import '../styles/CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

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

            console.log('User created:', user);

            // Store user information in Firestore
            await setDoc(doc(db, 'users', user.uid), {
              email: values.email
            });

            console.log(`User ${user.email} created successfully! Navigating to welcome page...`);
            
            navigate('/welcome'); // Navigate to the welcome page immediately
          } catch (error) {
            console.error("Error creating user:", error);
            alert(`Error creating user: ${error.message}`);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Form>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field name="confirmPassword" type="password" />
          <ErrorMessage name="confirmPassword" component="div" />

          <button type="submit">Create Account</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateAccount;
