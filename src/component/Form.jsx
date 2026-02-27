import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";


function Form() { 

  const [data,setData] = useState([]);

  const validationSchema = yup.object({

    name : yup
    .string("Enter Your name")
    .required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
      confirmpassword: yup
      .string("Enter your password")
      .oneOf([yup.ref("password")], "password is not metched")
      .required(" password is required"),
      contact:yup
      .string("Enter your contact")
      .matches(/^[0-9]{10}$/, "Contact number must be exactly 10 digits")
      .required("contact is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      contact: "",
      gender: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     
          // const  newUser = {
          //   ...values,
          //   id: Math.random() * Math.pow(5,6)
          // }
    
          // setData((prev) => [...prev, newUser]);

          // localStorage.setItem("data", JSON.stringify(data));
    },
  });



  return (
    <>
      <div
        style={{ backgroundColor: "#e6e6e6", padding: "1px", height: "100vh" }}
      >
        <div className="mainDiv">
          <h2 style={{ color: "#4caf50", marginBottom: "10px" }}>
            Registration form
          </h2>

          <form onSubmit = {formik.handleSubmit}>
            <label className="label" htmlFor="name">
              name:
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="inputField"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {
              formik.errors.name &&  <p style={{ color: "red" }}>{formik.errors.name}</p>
            }
            

            <label className="label" htmlFor="email">
              email:
            </label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="inputField"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {
              formik.errors.email &&  <p style={{ color: "red" }}>{formik.errors.email}</p>
            }

            <label className="label" htmlFor="password">
              password:
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="inputField"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {
              formik.errors.password &&  <p style={{ color: "red" }}>{formik.errors.password}</p>
            }

            <label className="label" htmlFor="password">
              Confirm password:
            </label>
            <input
              name="confirmpassword"
              type="password"
              placeholder="Password"
              className="inputField"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />
            {
              formik.errors.confirmpassword &&  <p style={{ color: "red" }}>{formik.errors.confirmpassword}</p>
            }

            <label className="label" htmlFor="contact">
              Contact:
            </label>
            <input
              name="contact"
              type="number"
              placeholder="Contact number"
              className="inputField"
              onChange={formik.handleChange}
              value={formik.values.contact}
            />
           {
              formik.errors.contact &&  <p style={{ color: "red" }}>{formik.errors.contact}</p>
            }

            <label className="label" htmlFor="gender">
              Gender:
            </label>
            <select
              className="inputField"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <option value="">Female</option>
              <option value="Male">Male</option>
            </select>
          

            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
