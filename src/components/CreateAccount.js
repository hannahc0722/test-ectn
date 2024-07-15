import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import '../styles/CreateAccount.css';

//this page does not navigate to welcome for some reason

const CreateAccount = () => {
  const navigate = useNavigate();

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
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
              email: values.email
            });

            navigate('/welcome');
          } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              alert('This email is already in use. Please try logging in.');
            } else {
              alert(`Error creating user: ${error.message}`);
            }
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
