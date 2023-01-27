import React, { useEffect } from "react";
import "../flashsale/sale.css";
import "../bestimesale/bestime.css";
import logo from "../../assets/footer-logo.png";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Facebook";
import { Twitter } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import './footer.css'
import FeaturesSection from "../FeaturesSection";
import { styled } from "@material-ui/core";
import twitterIcon from "../../assets/social_icons/twittericon.png";
import fbIcon from "../../assets/social_icons/fbicon.png";
import instaIcon from "../../assets/social_icons/instaicon.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";

// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
export default function Footer() {
  const history = useHistory()

  const categoryD = useSelector((state) => state.category.initialState);
  useEffect(() => {

  }, [categoryD])
  console.log('categoryD', categoryD);
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > :not(style)': {
    //       m: 1,
    //       width: 128,
    //       height: 128,
    //     },
    //   }}
    // >
    //   <Paper elevation={0} >

    <div className="containerfoot">
      <FeaturesSection />

      {categoryD &&
        <div className="container-foot" >
          <div className="container-foot-div"
          // style={{ flexDirection: "column", display: "flex", justifyContent: 'center', margin: '0% 10% 0% -8%' }}
          >
            <img width='100%' src={logo} alt="logo" style={{ width: '250px' }} />
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete" color="primary">
                <img src={fbIcon} width="30px" height="30px" />
              </IconButton>
              <IconButton aria-label="delete" color="info">
                <img src={twitterIcon} width="30px" height="30px" />
              </IconButton>
              <IconButton color="secondary" aria-label="add to shopping cart">
                <img src={instaIcon} width="30px" height="30px" />
              </IconButton>
            </Stack>
          </div>
          {/* <div className='flink'>
            <h2>Quick links</h2>
            <ListItemButton>
              Policy
            </ListItemButton>
            <ListItemButton>
              Term & Condition
            </ListItemButton>
            <ListItemButton>
              Shipping
            </ListItemButton>
            <ListItemButton>
              Return
            </ListItemButton>
            <ListItemButton>
              FAQs
            </ListItemButton>

          </div> */}
          <div className='flink'>
            <h2>Company</h2>
            <ListItemButton>
              {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="About Us"
            /> */}
              About Us
            </ListItemButton>
            <ListItemButton>
              {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Contact"
            /> */}
              Contact
            </ListItemButton>
          </div>
          <div className='flink'>
            <h2>Business</h2>
            <ListItemButton>
              {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Checkout"
            /> */}
              <Link style={{ color: "white", textDecoration: "none" }} to="/CheckOut">
                Checkout
              </Link>
            </ListItemButton>
            <ListItemButton>
              {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="My account"
            /> */}
              <Link style={{ color: "white", textDecoration: "none" }} to="/Login">
                My account
              </Link>
            </ListItemButton>
            <ListItemButton>
              {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Shop"
            /> */}
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Shop
              </Link>
            </ListItemButton>
          </div>
        </div>
      }

      <Divider />
      <h4 style={{
        background: "white",
        color: "black",
        margin: "0px",
        paddingTop: "10px",
        paddingBottom: "10px"
      }}>©Copyright Yes!TechDay 2022 . All Rights Reserved</h4>
      {/* <h4>© 2021 DeskWorkSolution. All Rights Reserved</h4> */}

    </div>

    //     {/* </Paper> */ }
    // {/* <Paper /> */ }
    // {/* <Paper elevation={3} /> */ }
    // {/* </Box> */ }
  );
}
