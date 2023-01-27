import React, { useState, useEffect } from "react";
import under from "../assets/logo.png"
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { cartData } from '../Store/Reducers/cartReducer';
import { useDispatch, useSelector } from "react-redux";

export const Thanks = () => {
    const location = useLocation();
    const history = useHistory();

    const cartD = useSelector((state) => state.cart.initialState);

   const dispatch = useDispatch()


   useEffect(() => {
       
       let data = JSON.parse(localStorage.getItem('cart'))
       dispatch(cartData(data));

   }, [])

    // console.log("location>", location.state)
    return (
        <div>
            <div style={{ textAlign: 'center', width: "400px", margin: '100px auto' }}>

                <img style={{ objectFit: 'contain' }} src={under} width='300px' />
                {location.state ?
                    <div style={{padding: '20px', backgroundColor: 'whitesmoke', marginBottom: '20px'}}>
                        <h1>Thanks For Shopping</h1>
                        <h3>Your Order ID : {location.state} </h3>
                    </div>
                    :
                    null
                }
                <div >
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" className="btnLog-2" onClick={() => history.push("/")}>
                            Go To Home
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}
