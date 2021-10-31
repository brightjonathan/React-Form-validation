import React from 'react'

//import this tool { Form, Field} from formik
import { Form, Field } from "formik";

//errors: for displaying error messages
//touched: for displaying the  right colour when clicked
//isValid: checking if validation is performed
//dirty: a func that helps in changing between next state and current state 

const ContactForm = ({ errors, touched, isValid, dirty }) => {
    // console.log(errors)
    return (
        <div className="containar">

          <div className="title">Registration</div>
            
            <Form className="user_details">
      <div className="form-group">

        <label className="col-form-label">Name :</label>
        <Field
          name="username" 
          title="name"
          className={
            touched.username
              ? `form-control ${errors.username ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text" required placeholder="Enter your name"
        />

        {touched.username && errors.username && (
          <small className="text-danger">{errors.username}</small>
        )}

      </div>

      <div className="form-group">
        <label className="col-form-label">Age :</label>
        <Field
          name="age"
          className={
            touched.age
              ? `form-control ${errors.age ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text" required placeholder="Enter your age"
        />

        {touched.age && errors.age && (
          <small className="text-danger">{errors.age}</small>
        )}

      </div>

      <div className="form-group">
        <label className="col-form-label">Email :</label>
        <Field
          name="email"
          className={
            touched.email
              ? `form-control ${errors.email ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text" required placeholder="Enter your email"
        />

        {touched.email && errors.email && (
          <small className="text-danger">{errors.email}</small>
        )}

      </div>

      <div className="form-group">
        <label className="col-form-label">Phone :</label>
        <Field
          name="phone"
          className={
            touched.phone
              ? `form-control ${errors.phone ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text" required placeholder="Enter your phone number"
        />

        {touched.phone && errors.phone && (
          <small className="text-danger">{errors.phone}</small>
        )}

      </div>
      
      <div className="form-group">
        <label className="col-form-label">Message :</label>
        <Field
          type="textarea"
          name="message"
          required placeholder="Enter your message"
          className={
            touched.message
              ? `form-control ${errors.message ? "invalid" : "valid"}`
              : `form-control`
          }
        />

        {touched.message && errors.message && (
          <small className="text-danger">{errors.message}</small>
        )}

      </div>

      <button
        type="submit"
        className="btn_1"
        disabled={!isValid || !dirty}
      >
        Submit
      </button>
    </Form>

        </div>
    )
}

export default ContactForm
