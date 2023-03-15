import React, { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import db from "../../database/firebase";
import "../../component/flashsale/sale.css";
import "../BestSaleItem/BestSaleItem.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { useHistory, Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@mui/system";
// import Footer from '../../component/footer/Footer'

export default function Categories() {
  const history = useHistory();
  const location = useLocation();
  // const productD = useSelector((state) => state.product.initialState);
  const [product, setProduct] = React.useState([]);
  useEffect(async () => {
    const collectionRef = collection(db, "product");
    const q = query(
      collectionRef,
      where("quantity", ">", 0),
      orderBy("quantity")
      // , limit(2)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // console.log(data);
      setProduct(data);
    });

    return unsub;
  }, []);

  const dataPass = (data) => {
    // console.log('main data', data)
    history.push({
      pathname: "/ProductDetail",
      // search: '?query=abc',
      state: { detail: data },
    });
    // history.push("/ProductDetail", data)
  };

  const { categoryName } = useParams();

  // console.log("fliter.....>>", product.filter((data, i) => { for (var i = 0; i < data.category.length; i++) { if (data.category[i] === location.state.detail.category) { return data } } }))
  // console.log("location.state.detail.category....>>>", location.state.detail.category);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300);
  }, [])

  return (
    <>
      {
        IsLoading ?
          <div className="load-center">
            <ClipLoader
              color={'red'}
              loading={IsLoading}
              size={100} />
          </div>
          :
          (
            <>
              <div style={{ marginTop: "10px" }}>
                <h1 className="heading-f" style={{ fontFamily: "Gill Sans" }} >Categories</h1>
                {/* <Divider variant="middle" /> */}
                <div className="container">
                  <div className="mainf-2">
                    {product
                      .filter((data, i) => {
                        for (var i = 0; i < data.category.length; i++) {
                          if (data.category[i] === categoryName) {
                            return data;
                          }
                        }
                      })
                      .map((e) => (
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
                                {e.name.length > 25 ? <div>{e.name.slice(0, 60)}...</div> : e.name}
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
                      ))}
                  </div>
                </div>
              </div>
            </>
          )
      }
    </>
  );
}
