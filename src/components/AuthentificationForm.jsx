import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout, signup, signInWithGoogle } from "../auth";
import { Formik, Form, Field, ErrorMessage } from "formik";

function AuthenticationForm() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignup = async (values) => {
    try {
      await signup(values.email, values.password);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async (values) => {
    try {
      await login(values.email, values.password);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="text-center text-lg font-semibold">
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button
            onClick={handleLogout}
            className="mr-2 px-3 py-1 bg-white rounded shadow"
          >
            Logout
          </button>
        </div>
      ) : (
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email is required";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
            return errors;
          }}
          onSubmit={() => {}}
        >
          {({ values }) => (
            <Form className="flex flex-col items-center gap-2">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="border p-1 rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-600 text-sm"
              />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="border p-1 rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-600 text-sm"
              />

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleSignup(values)}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Signup
                </button>
                <button
                  type="button"
                  onClick={() => handleLogin(values)}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default AuthenticationForm;
