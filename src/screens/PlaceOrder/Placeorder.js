import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
// import { useInput } from '@mui/core';
// import { styled } from '@mui/system';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
// import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import textarea from "@mui/material/TextareaAutosize";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { A700, orange } from '@mui/material/colors';
import "../Login/Login.css";
import "../PlaceOrder/Placeorder.css";
// import "./Register.css";
import { Link, useLocation } from "react-router-dom";
import { ListItemText } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  //  sendEmailVerification
} from "firebase/auth";
import db from "../../database/firebase";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { useHistory } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// import { Formik, Form } from "formik";
// import { useField } from "formik";
import { useForm } from "react-hook-form";

import under from "../../assets/register.png";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../../Store/Reducers/cartReducer";
import emailjs from '@emailjs/browser';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Placeorder = () => {
  const history = useHistory();
  const [disable, setDisable] = useState(true);
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([]);

  const [values, setValues] = useState({
    name: "",
    number: "",
    country: "",
    email: "",
    address: "",
    city: "",
  });
  const location = useLocation();

  const [valuesError, setValuesError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // useEffect(() => {
  //   console.log(valuesError);
  //   if (Object.keys(valuesError).length === 0 && isSubmit) {
  //     console.log("values", values);
  //   }
  // }, [valuesError]);

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.number) {
      errors.number = "Number is required!";
    }
    if (!values.country) {
      errors.country = "Country is required!";
    }

    if (!values.address) {
      errors.address = "Address is required!";
    }

    if (!values.city) {
      errors.city = "City is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    setValuesError(errors);
    return Object.keys(errors).length;
  };

  const [open, setOpen] = React.useState(false);
  const [openl, setOpenl] = React.useState(false);
  const [err, setErr] = React.useState("");

  const dispatch = useDispatch();

  const OrderSend = async () => {

    const generate = Date.now();

    if (validate() == 0) {
      addDoc(collection(db, "Order"), {
        ...location.state,
        user: {
          Gender: "none",
          date: new Date().toLocaleString(),
          email: values.email,
          fullname: values.name,
          phone: values.number,
          address: values.address + "" + values.city,
        },
        address: {
          fullName: values.name,
          phone: values.number,
          email: values.email,
          city: values.city,
          address: values.address,
        },
        detail: location.state.detail,
        date: new Date().toLocaleString(),
        orderId: generate,
      })
        .then(setOpen(true))
        .then(() => {

          let templatedata = {
            ...location.state,
            user: {
              Gender: "none",
              date: new Date().toLocaleString(),
              email: values.email,
              fullname: values.name,
              phone: values.number,
              address: values.address + "" + values.city,
            },
            address: {
              fullName: values.name,
              phone: values.number,
              email: values.email,
              city: values.city,
              address: values.address,
            },
            detail: location.state.detail,
            date: new Date().toLocaleString(),
            orderId: generate,
          }


          emailjs.send('service_af0mthc', 'template_ww7sgaf', templatedata, 'FnMWeAQlWoLBwbEma')
            .then((result) => {
              // console.log(result.text);
            }, (error) => {
              // console.log(error.text);
            });



          setTimeout(() => {
            history.push({
              pathname: "/Thanks",
              // search: '?query=abc',
              state: generate,
            });
          }, 2000)

        }
        );

      localStorage.setItem("cart", '{"cart":[]}');
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
    setDisable(false);
  };

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClosel = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenl(false);
  };
  const [multi, setMulti] = useState(0);
  const cartD = useSelector((state) => state.cart.initialState);

  useEffect(() => {
    setMulti(location.state.total);
  }, [cartD]);

  const [payment, setpayment] = useState("cod");

  // const [field, meta] = useField(values.email);

  // const { errors, register } = useForm();
  // console.log(errors)
  return (
    // <Formik initialValues={{
    //   // email: values.email,
    //   // password: values.password,
    //   // phone: values.phone,
    //   // fullname: values.fullname,
    //   email: "",
    //   password: "",
    //   phone: "",
    //   fullname: "",
    // }} >
    //   {Formik => (
    <div
      style={{ marginTop: "201px" }}
      className="devplace"
    // onSubmit={SignUp
    >
      {/* {Object.keys(valuesError).length === 0 && isSubmit ? setOpen(true) : setOpen(true)


      } */}
      <div
        className="div-form"
      // style={{
      //      width: "140px",
      //      display: "grid",
      //      margin: 'auto'
      //   }}
      >
        <h1>Checkout Form</h1>
        <div
          // className="divForm"
          className="divForm-new"
        // style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '0px 30px'}}
        >
          <div
            style={
              {
                // flex: '1 1 65%',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // width: '100%',
                // flexDirection: 'column'
              }
            }
          >
            {/* <p> 
              Already member?
              <Link className="linkReg" to="/Login">
                Login
              </Link>{" "}
              here.
            </p> */}
            <Box
              // component="form"
              sx={{
                width: "100%",
                "& .MuiTextField-root": {
                  marginBottom: "20px",
                  width: "318px",
                  maxWidth: "500px",
                },
              }}
              // noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="standard-textarea"
                  name="name"
                  label="Please enter Your name"
                  variant="outlined"
                  // onInput={(data) => setName(data.target.value)}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <p className="Errors">{valuesError.name}</p>

              <div>
                <TextField
                  id="standard-number"
                  name="number"
                  label="Number"
                  type="number"
                  variant="outlined"
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <p className="Errors">{valuesError.number}</p>

              <div>
                <TextField
                  id="country"
                  name="country"
                  label="Country"
                  type="Text"
                  variant="outlined"
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <p className="Errors">{valuesError.country}</p>

              {/* <div>
                <TextField
                  id="ZipCode"
                  name="zipcode"
                  label="Zip code"
                  type="Number"
                  variant="outlined"
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <p className="Errors">{valuesError.zipcode}</p> */}

              <div>
                <TextField
                  id="standard-textarea"
                  name="email"
                  label="Please enter your Email"
                  variant="outlined"
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <p className="Errors">{valuesError.email}</p>
              <div>
                <TextField
                  id="address"
                  name="address"
                  label="Address"
                  type="Text"
                  variant="outlined"
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <p className="Errors">{valuesError.address}</p>

              <div>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  type="Text"
                  variant="outlined"
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <p className="Errors">{valuesError.city}</p>
            </Box>

            {/* <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                disabled={disable}
                className="btnLog"
                onClick={() => SignUp()}
              >
                Place Order
              </Button>
            </Stack> */}
          </div>
          {/* <div style={{
              flex: '1 1 65%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              flexDirection: 'column'
          }}>
          
         
       
      
           
           
          </div> */}

          {/* </Form> */}
        </div>
        <Stack spacing={2} direction="row">
          <Button
            style={{ width: "70%", display: "flex" }}
            variant="contained"
            className="btnLog"
            onClick={() => OrderSend()}
          >
            Place Order
          </Button>
        </Stack>
        <Stack spacing={2} sx={{ width: "100%" }}>
          {/* <Button variant="outlined" onClick={handleClick}>
                      Open success snackbar
                    </Button> */}
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Ordered Successfully!
            </Alert>
          </Snackbar>
          <Snackbar open={openl} autoHideDuration={3000} onClose={handleClosel}>
            <Alert
              onClose={handleClosel}
              severity="error"
              sx={{ width: "100%" }}
            >
              {err}
            </Alert>
          </Snackbar>
          {/* <Alert severity="error">This is an error message!</Alert>
                    <Alert severity="warning">This is a warning message!</Alert>
                    <Alert severity="info">This is an information message!</Alert>
                  <Alert severity="success">This is a success message!</Alert> */}
        </Stack>
      </div>
      <div
        style={{
          //         flex: '1 1 65%',
          //         display: 'flex',
          //         justifyContent: 'center',
          //         alignItems: 'center',
          //         width: '100%',
          //         flexDirection: 'column'
          marginRight: "200px",
        }}
      >
        <Box
          component="form"
          sx={{
            width: "100%",
            "& .MuiTextField-root": {
              marginBottom: "20px",
              width: "100%",
              maxWidth: "400px",
            },
            "& .MuiOutlinedInput-root": { borderRadius: "50px" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid className="grid-grid" item xs={6} md={4}>
            <Paper
              className="pper-1"
              elevation={2}
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="Cart-Main-1">
                <div>
                  <h3>Order Summary</h3>
                </div>
                <div>
                  {cartD.cart.map((data) => (
                    <div >
                      <h6>
                        <span style={{ fontSize: ".9rem", fontFamily: "Gill Sans" }}>Subtotal </span>
                        <span
                          style={{ fontSize: ".9rem", fontWeight: "lighter", fontFamily: "Gill Sans" }}
                        >
                          {data.name}
                        </span>
                      </h6>
                      {/* <h5></h5> */}
                      {data.discountPrice ? (
                        <h6 style={{ fontSize: ".9rem", fontFamily: "Gill Sans" }}>
                          Rs : {data.count * data.discountPrice}
                        </h6>
                      ) : (
                        <h6 style={{ fontSize: ".9rem", fontFamily: "Gill Sans" }}>
                          Rs : {data.count * data.rate}
                        </h6>
                      )}
                      {/* {setTotalRate(data.count * data.data.rate)} */}
                    </div>
                  ))}

                  {/* <div >
                    <h6 style={{ fontSize: ".9rem" }}>Shipping Fee</h6>
                    <h6 style={{ fontSize: ".9rem" }}>Rs : 200</h6>
                  </div> */}

                  <div >
                    <h6 style={{ fontSize: ".9rem", fontFamily: "Gill Sans" }}>CASH ON DELIEVERY</h6>
                    <input
                      type="radio"
                      onClick={() => setpayment("cod")}
                      checked={payment == "cod"}
                    />
                  </div>

                  {/* <div >
                              <h6>BANK TRANSFER</h6>
                              <input type="radio" onClick={()=>setpayment("bank")} checked={payment == "bank"}  />
                            </div>
                             */}
                  {payment == "bank" && (
                    <div className="">
                      <h6>BANK DETAILS</h6>
                      <br></br>
                      <div className="">
                        NOTE: PLEASE TRANSFER THE AMOUNT AND SEND THE RECIEPT ON
                        Popular WHATSAPP CONTACT ! THANK YOU.
                        <br></br>
                        <br></br>
                        Meezan Bank-Askari IV Branch, Karachi
                        <br></br>
                        <br></br>
                        Account Number: 10170105443360
                        <br></br>
                        <br></br>
                        IBAN: PK84MEZN0010170105443360
                        <br></br>
                        <br></br>
                      </div>
                      <br></br>
                    </div>
                  )}
                </div>
                {/* <div className="frmBtn">
                          <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "20ch" },
                          }}
                          noValidate
                          autoComplete="off"
                          >
                          <div className="input-code">
                          <TextField
                          id="standard-textarea"
                          label="Enter Voucher Code"
                          // placeholder="Placeholder"
                          // multiline
                          variant="standard"
                          />
                          </div>
                          </Box>
                          <Stack spacing={2} direction="row">
                          <Button className="countbtn1" variant="contained">
                              Apply
                              </Button>
                              </Stack>
                            </div> */}

                <div>
                  <div >
                    <h6 style={{ fontSize: ".9rem", fontFamily: "Gill Sans" }}>Total</h6>
                    <h6 style={{ fontSize: ".9rem", fontFamily: "Gill Sans" }}>Rs : {multi}</h6>
                  </div>
                </div>
                {/* <div className="countbtn-2">
                          <Stack spacing={2} direction="row">
                            <Button
                              className="countbtn2"
                              // onClick={handleOpen}
                              // onClick={handleOpen}
                              onClick={() => dataPush()}
                              variant="contained"
                            >
                              PROCEED TO CHECKOUT
                            </Button>
                          </Stack>
                        </div>
                        <div className="countbtn-2">
                          <Stack spacing={2} direction="row">
                            <Button
                              className="countbtn2"
                              onClick={() => setTimeout(() => { history.push('/') }, 1000)}
                              variant="contained"
                            >
                              Continue Shopping
                            </Button>
                          </Stack>
                        </div> */}
              </div>
            </Paper>
          </Grid>
        </Box>
      </div>
      {/* // </Formik> */}
      {/* //   )} */}
    </div>
  );
};
