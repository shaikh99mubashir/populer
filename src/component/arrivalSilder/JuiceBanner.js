import { Stack } from '@mui/system';
import {  styled } from "@mui/material/styles";
import leftImg from '../../assets/1l.png';
import rightImg from '../../assets/banner.jpeg';

const BannerStyle = styled(Stack)(({ theme }) => ({
       width : "100%",
      // height: "10px",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
  }));
const JuiceBanner = () => {
    return(
          <BannerStyle>
            <div >
                <img style={{width : "100%"}}src={rightImg} alt="Real Fruit Juice" />
            </div>
            </BannerStyle>
    )
}
export default JuiceBanner;