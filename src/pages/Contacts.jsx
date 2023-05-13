import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Meta from "../components/Meta";

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Password must be 4 characters at minimum")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  phone: Yup.string()
    .min(4, "Password must be 4 characters at minimum")
    .required("Phone number is required"),
  query: Yup.string()
    .min(4, "Query must be 4 characters at minimum")
    .required("Query is required"),
});

function ContactForm() {
  const [status, setStatus] = React.useState(false);

  const handleReset = (resetForm) => {
    resetForm();
  };

  const resetMessage = () => {
    setTimeout(() => {
      setStatus(false);
    }, 5000);
  };

  return (
    <>
      {status && (
        <div className="alert alert-success mt-3">
          Thank for your connecting with us.
        </div>
      )}

      <Formik
        initialValues={{ name: "", email: "", phone: "", query: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, formProps) => {
          // console.log(formProps);
          fetch("/api/contact.php", {
            method: "POST",
            body: JSON.stringify({
              name: values.name,
              phone: values.phone,
              email: values.email,
              query: values.query,
              type: "CONTACT",
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          setStatus(true);
          resetMessage();
          handleReset(formProps.resetForm);
          formProps.setFieldValue("query", "");
          // resetForm({ values: "" });
        }}
      >
        {
          (formProps) => (
            // !isSubmitting ? (
            <div className="contact-us-dic">
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    autoComplete="off"
                    className={`mt-2 form-control
                            ${
                              formProps.touched.name && formProps.errors.name
                                ? "is-invalid"
                                : ""
                            }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="mt-3">
                    Email *
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className={`mt-2 form-control
              ${
                formProps.touched.email && formProps.errors.email
                  ? "is-invalid"
                  : ""
              }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="mt-3">
                    Phone No. *
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    autoComplete="off"
                    className={`mt-2 form-control
                            ${
                              formProps.touched.name && formProps.errors.name
                                ? "is-invalid"
                                : ""
                            }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="phone"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="query" className="mt-3">
                    Write your message *
                  </label>
                  <Field
                    as="textarea"
                    type="textarea"
                    name="query"
                    rows={5}
                    placeholder="Write your message"
                    autoComplete="off"
                    className={`mt-2 form-control
                            ${
                              formProps.touched.name && formProps.errors.name
                                ? "is-invalid"
                                : ""
                            }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="query"
                    className="invalid-feedback"
                  />
                </div>

                <div className="row">
                  <div className="col text-center">
                    <button
                      disabled={!(formProps.isValid && formProps.dirty)}
                      type="submit"
                      className="btn btn-primary btn-block mt-4 sub-btn contact-us-button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          )
          // ) : (

          // )
        }
      </Formik>
    </>
  );
}

const Contact = () => {
  // page content
  const pageTitle = "Contact us";
  // const { signIn,auth } = useAuth();
  // console.log(signIn);
  return (
    // <Container>
    <div className="contactus">
      <Meta title={pageTitle} />

      <h2 className="cms-page">Contact us</h2>
      <br />
      <div className="row test">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          {/* <p>Fan? Drop a note.</p> */}

          <img
            src="./assets/img/Contact_Us/ContactUs.jpg"
            alt="Contact us"
            className="img-fluid"
          />
          <br />
          <br />
          <p></p>
          <p></p>
          <p>
            <b>Phone:</b> +91 8208793082 , +91 9021751269
          </p>
          <p>
            <b>Email:</b> connect@greencontie.com
          </p>
        </div>
        <div className="col-md-5">
          <ContactForm />
        </div>
        <div className="col-md-1"></div>
      </div>
      <br />
    </div>
    // </Container>
  );
};

export default Contact;
