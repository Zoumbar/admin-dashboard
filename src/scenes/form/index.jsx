import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from "react";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adress1: "",
    adress2: "",
  };

  const phoneRegExp = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/gm;

  const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    adress1: yup.string().required("required"),
    adress2: yup.string().required("required"),
  });
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div":{gridColumn: isNonMobile ? undefined : "span 4"}
              }}
            >
                <TextField 
                    fullWidth
                    variant="filled"
                    type="text"
                    label="First name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    errors={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{gridColumn: "span 2"}}
                />
                <TextField 
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    errors={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{gridColumn: "span 2"}}
                />
                <TextField 
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    errors={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{gridColumn: "span 4"}}
                />
                <TextField 
                    fullWidth
                    variant="filled"
                    type="text"
                    label="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    errors={!!touched.phone && !!errors.phones}
                    helperText={touched.phone && errors.phone}
                    sx={{gridColumn: "span 4"}}
                />
                <TextField 
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Adress 1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.adress1}
                    name="adress1"
                    errors={!!touched.adress1 && !!errors.adress1}
                    helperText={touched.adress1 && errors.adress1}
                    sx={{gridColumn: "span 4"}}
                />
                <TextField 
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Complement adress"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.adress2}
                    name="adress2"
                    errors={!!touched.adress2 && !!errors.adress2}
                    helperText={touched.adress2 && errors.adress2}
                    sx={{gridColumn: "span 4"}}
                />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                    Create New User
                </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
