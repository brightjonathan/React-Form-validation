import React from 'react';
import './App.css';

//imported formit
import { Formik } from "formik";

//imported file
import ContactForm from "./Component/ContactForm";

//imported yup
import * as Yup from "yup";


function App() {

  //created an Error schema to validate the form
  //To validate must use the Name of the input 
  const ErrorSchema = Yup.object().shape({

    //validating the username using yup
    username: Yup.string()
      .required("Name is required")
      .min(2, "Name too Short")
      .max(12, "Name too Long"),
      
      //valiating the age using yup
    age: Yup.number()
      .typeError("Age must be a number")
      .integer("Age must be an integer")
      .required("Age is Required")
      .min(18, "You must be at least 18 years")
      .max(60, "You must be at less than 60 years"),

      //validating email using yup
    email: Yup.string().email("Invalid email").required("Email Required"),

    //validating phone number using yup
    phone: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Not a Phone number"
      )
      .required("Phone Number is Required"),

      //validating message using yup
    message: Yup.string()
      .min(5, "Message Too Short!")
      .max(100, "Message Too Long!")
      .required("Message is Required"),
  });

  return (
    <div className="App">
       
       <Formik
            
            //adding initial values to each of the input
            initialValues={{
              username: "",
              age: "",
              email: "",
              phone: "",
              message: "",
            }}

            //adding a submit event 
            onSubmit={(value, { resetForm }) => {

              //converting to JSON FORMAT
              const json1 = JSON.stringify(value, null, 4)

              //the value can go to the server side 
              console.log(json1);

              //reset the form when clicked to its original state...
              resetForm();
            }}
            
            //adding a validation scheme that will validate the form 
            validationSchema={ErrorSchema}

            //using conponent method to import fille {ContactForm}
            component={ContactForm}
          />
          
    </div>
  );
}

export default App;
