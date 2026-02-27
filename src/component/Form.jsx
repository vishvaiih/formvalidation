import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

function Form() {
  const [data, setData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object({
    name: yup.string("Enter Your name").required("Name is required"),
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
    contact: yup
      .string("Enter your contact")
      .matches(/^[0-9]{10}$/, "Contact number must be exactly 10 digits")
      .required("contact is required"),
    gender: yup.string().required("Gender is required"),
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
    onSubmit: (values, { setFieldError }) => {
      console.log("....");

      const findsameemaildata = data?.find((itm) => itm.email === values.email);
      if (findsameemaildata) {
        setFieldError("email", "Email already exists");
        return;
      }

      const newUser = {
        ...values,
        id: Math.random() * Math.pow(5, 6),
      };

      setData((prev) => [...prev, newUser]);

      toast.success("Registration successfully");
    },
  });

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#e6e6e6",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="mainDiv">
          <h2 style={{ color: "#4caf50", marginBottom: "10px" }}>
            Registration form
          </h2>

          <form onSubmit={formik.handleSubmit}>
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
            {formik.errors.name && (
              <p style={{ color: "red" }}>{formik.errors.name}</p>
            )}

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
            {formik.errors.email && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}

            <label className="label" htmlFor="password">
              password:
            </label>
            <div style={{ position: "relative" }}>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="inputField"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10%",

                  cursor: "pointer",
                }}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </span>
            </div>
            {formik.errors.password && (
              <p style={{ color: "red" }}>{formik.errors.password}</p>
            )}

            <label className="label" htmlFor="password">
              Confirm password:
            </label>

            <input
              name="confirmpassword"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="inputField"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />

            {formik.errors.confirmpassword && (
              <p style={{ color: "red" }}>{formik.errors.confirmpassword}</p>
            )}

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
            {formik.errors.contact && (
              <p style={{ color: "red" }}>{formik.errors.contact}</p>
            )}

            <label className="label" htmlFor="gender">
              Gender:
            </label>
            <select
              className="inputField"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            {formik.errors.gender && (
              <p style={{ color: "red" }}>{formik.errors.gender}</p>
            )}

            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
