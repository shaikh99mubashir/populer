import React, { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  limit,
  orderBy,
  query,
  where,
  startAfter,
} from "firebase/firestore";
import db from "../../database/firebase";
import "../../component/flashsale/sale.css";
import "../BestSaleItem/BestSaleItem.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

export const Search = ({ itemSearch }) => {
  // console.log("irtm...>>>>>", itemSearch)
  const history = useHistory();
  const [isFLoad, setIsFLoad] = useState(false);
  // const product = useSelector((state) => state.product.initialState);

  const [product, setProduct] = useState([]);

  //-------------------- all products --------------------------------

  useEffect(async () => {
    const collectionRef = collection(db, "product");
    const q = query(
      collectionRef
      //   where("name", "in", itemSearch),
    );

    let data = [];

    const unsub = onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        try {
          if (
            doc
              .data()
              .name.toLowerCase()
              .includes(" " + itemSearch.toLowerCase() + " ")
          ) {
            data.push(doc.data());
          } else if (
            doc.data().name.toLowerCase().includes(itemSearch.toLowerCase())
          ) {
            data.push(doc.data());
          }
        } catch (error) {
          console.log(error);
        }
      });
      setProduct(data);
    });


    return unsub;
  }, [itemSearch]);

  // const productF = useSelector((state) => state.flashSale.initialState);
  // const [product, setProduct] = React.useState([]);
  // useEffect(async () => {
  //     setIsFLoad(true)
  //     const collectionRef = collection(db, "product");
  //     const q = query(
  //         collectionRef,
  //         // where('name', '==', `${itemSearch}`)
  //         where("quantity", '>', 0),
  //         orderBy("quantity"),
  //         // orderBy("discountPrice", "asc")
  //         // limit(5)
  //     );

  //     const unsub = onSnapshot(q, (snapshot) => {
  //         const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //         setProduct(data);
  //         setIsFLoad(false)
  //     });

  //     return unsub;
  // }, []);

  // const [lastDoc, setLastDoc] = useState([]);

  // const [isEmpty, setIsEmpty] = useState(false)
  // const [isPLoad, setIsPLoad] = useState(false)

  // useEffect(async () => {
  //     setIsFLoad(true)
  //     const collectionRef = collection(db, "product");
  //     const q = query(collectionRef,
  //         where("quantity", ">", 0),
  //         orderBy("quantity"),
  //         // orderBy('name', 'desc'),
  //         limit(20)
  //     );

  //     const unsub = onSnapshot(q, (snapshot) => {
  //         const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //         const lastDoc = snapshot.docs[snapshot.docs.length - 1];
  //         // setBestSale(data);
  //         // data.map((data) => {
  //         //   data.quantity == 0 ? null :
  //         //     dispatch(productData(data))
  //         // }
  //         // )
  //         setProduct(data);
  //         setIsFLoad(false)
  //         // dispatch(productData(data))
  //         // setIsLoad(false)
  //         setLastDoc(lastDoc);
  //     });

  //     return unsub;
  // }, []);

  // const productD = useSelector((state) => state.product.initialState);

  // const fetchMore = () => {
  //     setIsPLoad(true)
  //     // useEffect(async () => {
  //     const collectionRef = collection(db, "product");
  //     const q = query(collectionRef,
  //         where("quantity", '>', 0),
  //         orderBy("quantity"),
  //         // orderBy('name', 'desc'),
  //         startAfter(lastDoc),
  //         limit(20)
  //     );

  //     const unsub = onSnapshot(q, (snapshot) => {
  //         const isCollectionEmpty = snapshot.size === 0;
  //         if (!isCollectionEmpty) {

  //             const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //             const lastDoc = snapshot.docs[snapshot.docs.length - 1];

  //             setProduct(product => [...product, ...data])
  //             // setIsLoad(false)
  //             setLastDoc(lastDoc);
  //         } else {
  //             setIsEmpty(true);
  //         }
  //         setIsPLoad(false)
  //     });

  //     return unsub;
  //     // }, []);

  // }

  // const [productF, setProductF] = React.useState([]);
  // useEffect(async () => {
  //     const collectionRef = collection(db, "timesale");
  //     const q = query(
  //         collectionRef,
  //         // orderBy("discountPrice", "asc")
  //         // limit(5)
  //     );

  //     const unsub = onSnapshot(q, (snapshot) => {
  //         const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //         setProductF(data);
  //     });

  //     return unsub;

  // }, []);
  const productF = [];

  const dataPass = (data) => {
    // console.log('main data', data)
    history.push({
      pathname: "/ProductDetail",
      // search: '?query=abc',
      state: { detail: data },
    });
    // history.push("/ProductDetail", data)
  };
  const dataPassF = (data) => {
    // console.log('main data', data)
    history.push({
      pathname: "/FlashProductDetail",
      // search: '?query=abc',
      state: { detail: data },
    });
    // history.push("/ProductDetail", data)
  };

  // console.log("asc", productD.map(data => data.discountPercenage))

  return (
    <>
      <h1 className="heading-f" style={{ marginBottom: "101px" }}>
        Search Results
      </h1>
      {isFLoad && (
        <div
          style={{
            textAlign: "center !important",
            marginLeft: "45%",
            marginTop: "3%",
          }}
        >
          <CircularProgress style={{ margin: "3% 3%" }} disableShrink />
        </div>
      )}
      {/* <Divider variant="middle" /> */}
      {(product.length && itemSearch.length) > 0 ? (
        <div className="container-ff">

          {/* <div className="mainf-2" style={{ gap: 40 }}>
            {product
              .map(
                (data) =>
                  data.quantity ? (
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
                          width: 200,


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
                                  width: "55%",
                                }}
                              >
                                {data.quantity == 0 ? 'SOLD' : 'SALE'}
                              </div>
                            ) : null}
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
                                  style={{ color: "#FC1310", fontSize: 18, fontFamily: "Gill Sans" }}
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
                                    style={{
                                      fontSize: 14,
                                      color: "#0C4DA2",
                                    }}
                                  >
                                    {data.discountPrice ? (
                                      <>RS.{data.rate}</>
                                    ) : (
                                      <>RS.{data.discountPrice}</>
                                    )}
                                  </span>
                                  <span
                                    className="disperf"
                                    style={{
                                      fontSize: 14,
                                      color: "#000000",
                                    }}
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
          </div> */}
          <div style={{ display: "flex", flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>


            {product && product.map((e, i) => {
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
              )
            })}
          </div>
        </div>
      ) :
        (
          <h2 style={{ textAlign: 'center' }}>No Product Found!</h2>
        )}
    </>
  );

};
