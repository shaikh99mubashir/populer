import React, { useState, useEffect } from "react";
// import {
//   onSnapshot,
//   collection,
//   limit,
//   orderBy,
//   query,
// } from "firebase/firestore";
// import db from "../../database/firebase";
import "../../component/flashsale/sale.css";
import "../../screens/BestSaleItem/BestSaleItem.css";
import CircularProgress from "@mui/material/CircularProgress";
import { CardActionArea, makeStyles } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Container, textAlign } from "@mui/system";
import { styled } from "@mui/material/styles";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../assets/aboutbanner2.png'
import { collection, getDocs } from "firebase/firestore";
import db from "../../database/firebase";
const ProductsStyle = styled(Stack)(({ theme }) => ({
  //    width : "1600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  // height: "10px",
  margin: "auto",
  // margin: "10px 500px 10px 0px",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));


export default function NewArrival({ fetchMore, isEmpty, isPLoad }) {
  // const [productD, setProductD] = useState([])

  const history = useHistory();
  const productD = useSelector((state) => state.product.initialState);
  console.log('productD==>', productD);
  // console.log('productD==>0>>', productD);
  // const [product, setProduct] = React.useState([]);
  // useEffect(async () => {
  //   const collectionRef = collection(db, "product");
  //   const q = query(
  //     collectionRef,
  //     orderBy("name", "asc")
  //     // limit(5)
  //   );

  //   const unsub = onSnapshot(q, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     setProduct(data);
  //   });

  //   return unsub;
  // }, []);

  // useEffect(() => {
  //   setProductD(productData)
  // }, [productData])

  // console.log('main data', productD)
  const dataPass = (data) => {
    // console.log('main data', data)
    history.push({
      pathname: "/ProductDetail",
      // search: '?query=abc',
      state: { detail: data },
    });
    // history.push("/ProductDetail", data)
  };

  // const [productData, setProductData] = useState([])
  // const getProductData = async () => {
  //   const data = await getDocs(collection(db, "product"));
  //   setProductData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  // useEffect(() => {
  //   getProductData();
  // }, [])

  return (
    <ProductsStyle>
      <div className="prod-div-main">
        <h1 className="heading-f">Products </h1>
        {/* <Divider variant="middle" /> */}
        <div className="container-ff">
          <div style={{ display: "flex", flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
            {/* {productD.length == 0 ? (
              <>
                <div className="mainf-2 d-none">
                  {productD

                    .map(
                      (data) =>
                        data.quantity ? (
                          <div
                            style={{
                              minWidth: "calc(25% - 40px)",
                              textAlign: "center",
                              maxWidth: "calc(50% - 40px)",
                            }}
                          >
                            <Card
                              style={{
                                cursor: "pointer",
                                backgroundColor: "whitesmoke",
                                fontWeight: "bold",
                                fontFamily: "GillSans",
                              }}
                              sx={{ maxWidth: 160 }}
                              className="cardSli"
                            >
                              <Link
                                to={`/ProductDetail/${data.name}`}
                                style={{
                                  textDecoration: "inherit",
                                  color: "inherit",
                                }}
                              >
                                <>
                                  {data.discountPrice ? (
                                    <div
                                      style={{
                                        color: "white",
                                        backgroundColor: "red",
                                        float: "right",
                                        width: "35%",
                                      }}
                                    >
                                      SALE
                                    </div>
                                  ) : null}
                                  <CardMedia
                                    component="img"
                                    height="200"
                                    width="150"
                                    image={data.image}
                                    alt="green iguana"
                                    className="cardSli-M"
                                    style={{ objectFit: "contain" }}
                                  />

                                  <div className="artypo">
                                    {data.name}
                                  </div>

                                  <div className="disdiv">
                                    <div className="discount-f">
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                          fontSize: 16,
                                        }}
                                        className="textf"
                                      >
                                        {data.discountPrice ? (
                                          <>Rs: {data.discountPrice}</>
                                        ) : (
                                          <>Rs: {data.rate}</>
                                        )}
                                      </span>
                                    </div>
                                    {data.discountPrice ? (
                                      <div className="discountf">
                                        <span className="disratef">
                                          {data.discountPrice ? (
                                            <>RS.{data.rate}</>
                                          ) : (
                                            <>RS.{data.discountPrice}</>
                                          )}
                                        </span>
                                        <span className="disperf">
                                          -{data.discountPercentage}%
                                        </span>
                                      </div>
                                    ) : null}
                                  </div>
                                </>
                              </Link>
                            </Card>
                          </div>
                        ) : null
                    )
                  }


                </div>
                <h1 className="heading-f">No Products</h1>

              </>

            ) : (
              <div className="mainf-2">
                {productD
                  .map(
                    (data) =>
                      data.quantity > 0 ? (
                        <div
                          style={{
                            minWidth: "calc(18% - 40px)",
                            textAlign: "center",
                            maxWidth: "calc(50% - 40px)",
                          }}
                        >
                          <Card
                            style={{
                              cursor: "pointer",
                              backgroundColor: "whitesmoke",
                              fontFamily: "poppins",
                            }}
                            className="cardSli"
                          >
                            <Link
                              to={`/ProductDetail/${data.name}`}
                              style={{
                                textDecoration: "inherit",
                                color: "inherit",
                              }}
                            >
                              <>
                                {data.discountPrice ? (
                                  <div
                                    style={{
                                      color: "white",
                                      backgroundColor: "red",
                                      float: "right",
                                      width: "35%",
                                    }}
                                  >
                                    SALE
                                  </div>
                                ) : data.quantity == 0 ? <div
                                  style={{
                                    color: "white",
                                    backgroundColor: "red",
                                    float: "right",
                                    width: "35%",
                                  }}
                                >
                                  Sold Out
                                </div> : null

                                }
                                <CardMedia
                                  component="img"
                                  height="200"
                                  width="150"
                                  image={data.image}
                                  alt="green iguana"
                                  className="cardSli-M"
                                  style={{
                                    objectFit: "contain",
                                    marginTop: "30px",
                                    color: "#494949",
                                  }}
                                />

                                <div className="artypo">
                                  {data.name}
                                </div>

                                <div className="disdiv">
                                  <div className="discount-f">
                                    <span
                                      style={{ color: "#FC1310", fontSize: 18 }}
                                      className="textf"
                                    >
                                      {data.discountPrice ? (
                                        <>Rs: {data.discountPrice}</>
                                      ) : (
                                        <>Rs: {data.rate}</>
                                      )}
                                    </span>
                                  </div>
                                  {data.discountPrice ? (
                                    <div className="discountf">
                                      <span
                                        className="disratef"
                                        style={{ fontSize: 14, color: "#0C4DA2", fontFamily: "Gill Sans" }}
                                      >
                                        {data.discountPrice ? (
                                          <>RS.{data.rate}</>
                                        ) : (
                                          <>RS.{data.discountPrice}</>
                                        )}
                                      </span>
                                      <span
                                        className="disperf"
                                        style={{ fontSize: 14, color: "#000000", fontFamily: "Gill Sans" }}
                                      >
                                        -{data.discountPercentage}%
                                      </span>
                                    </div>
                                  ) : null}

                                </div>
                              </>
                            </Link>
                          </Card>
                        </div>
                      ) : null
                  )}
              </div>
            )} */}

            {productD && productD.map((e, i) => {
              return (
                <Link to={`/ProductDetail/${e.name}`}
                  style={{
                    textDecoration: "none"
                  }}>
                  <Card sx={{ width: 340, height: 415 }}>
                    <Box sx={{ float: 'right' }}>
                      <Typography gutterBottom variant="h5" component="div" sx={{
                        fontFamily: "Gill Sans",
                        backgroundColor: 'red', color: 'white', margin: 0, padding: '2px 15px ',
                        borderRadius: '0px 0px 0px 5px'
                      }}>
                        {e.quantity == 0 ? 'Sold' : 'Sale'}

                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "-webkit-center" }}>

                      <CardMedia
                        sx={{
                          height: 200,
                          width: 200, objectFit: 'contain',
                          alignItems: "center",
                          marginTop: 2,
                        }}
                        image={e.image}
                        title="green iguana"
                      />
                    </Box>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: "Gill Sans", textAlign: 'start' }}>
                        {e.name.length > 60 ? <div>{e.name.slice(0, 60)}...</div> : e.name}
                      </Typography>
                      <Box sx={{ marginTop: 3 }}>
                        <Typography gutterBottom component="div" sx={{ fontFamily: "Gill Sans", textAlign: 'start', fontSize: '1.5rem', margin: 0, color: 'red' }}>
                          {e.discountPrice ? (
                            <>Rs: {e.discountPrice}</>
                          ) : (
                            <>Rs: {e.rate}</>
                          )}
                        </Typography>
                        <Typography gutterBottom component="div" sx={{ fontFamily: "Gill Sans", textAlign: 'start', fontSize: '1.2rem', margin: 0, color: "rgb(12, 77, 162)" }}>
                          {e.discountPrice ? (
                            <div>
                              <span style={{ textDecoration: 'line-through', color: "rgb(12, 77, 162)" }}>
                                {e.discountPrice ? (
                                  <>RS.{e.rate}</>
                                ) : (
                                  <>RS.{e.discountPrice}</>
                                )}
                              </span>
                              <span style={{ fontSize: 12, color: "rgb(12, 77, 162)", marginLeft: 5 }}>
                                -{e.discountPercentage}%
                              </span>
                            </div>
                          ) : null}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
        <div>
          {isPLoad && (
            <CircularProgress style={{ margin: "3% 3%" }} disableShrink />
          )}
          {!isEmpty && !isPLoad && (
            // <button onClick={fetchMore}>
            //   More
            // </button>
            <Stack
              // spacing={2}
              // direction="row"
              style={{ margin: "3% 5%" }}
            >
              <Button
                variant="contained"
                className="btnLog-btn"
                color="info"
                style={{
                  width: "200px",
                  alignSelf: "center",
                  //   background: 'linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%)'
                }}
                onClick={fetchMore}
              >
                Load More
              </Button>
            </Stack>
          )}
        </div>
      </div>
    </ProductsStyle>
  );
}
