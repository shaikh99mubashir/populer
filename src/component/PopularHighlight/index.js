import React from 'react'
import { DetailsSection, FloatingImgLeft, FloatingImgRight, ImgSection, LeftSection, MainSection, ParaText, RightSection, SubTitleText, TitleText } from './PopularHighlight.styles';
import leftImg from '../../assets/EnD2.png';
import rightImg from '../../assets/EnD1.png';

import { Box } from '@mui/system';
import './style.css'
import { Stack } from '@mui/system';
import {  styled } from "@mui/material/styles";
import { Grid } from '@mui/material';

const BannerTowStyle = styled(Stack)(({ theme }) => ({
    width : "100%",
   // height: "10px",
 display : "flex",
 justifyContent : "center",
 alignItems : "center",
 flexDirection : "row",
 margin : "auto",
 [theme.breakpoints.up("sm")]: {
    //  marginLeft: theme.spacing(3),
     width: "auto",
     margin : "100px"
 },
 [theme.breakpoints.down("sm")]: {
    width: "auto",
     marginLeft: theme.spacing(1),
     marginRight: theme.spacing(1),
 },
}));

const PopularHighlight = () => {
  return (
    <BannerTowStyle>
            <Grid item container lg = {12} spacing = {3}  >
                <Grid item lg = {6} sm = {6} xs = {6}>
            <div className='ImgSection'>
                <img className='img2' style={{width : "100%"}} src={rightImg} alt="Real Fruit Juice" />
            </div>
                </Grid>
                <Grid item  lg = {6} sm = {6} xs = {6}>
                <div className='ImgSection'>
                <img className='img2' style={{width : "100%"}} src={leftImg} alt="Real Fruit Juice" />
             </div>
                </Grid>
            </Grid>
    </BannerTowStyle>
  )
}

export default PopularHighlight;