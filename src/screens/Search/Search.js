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

          <div className="mainf-2" style={{ gap: 40 }}>
            {product
              // .slice(0, 20)
              // .sort(() => 0.5 - Math.random())
              // :
              // productD
              .map(
                (data) =>
                  // <div className="cardf">
                  //   <div className="postf">
                  //     <img  src={data.image} />
                  //     <span className="textf">{data.name}</span>
                  //     <span className="textf">{data.spec}</span>
                  //     <span
                  //       style={{ color: "red", fontWeight: "bold" }}
                  //       className="textf"
                  //     >
                  //       RS.{data.rate}
                  //     </span>
                  //     <div className="discountf">
                  //       {/* <span className="disratef">RS.{data.flashData.rate}</span> */}
                  //       {/* <span className="disperf">-{data.discountPercenage}%</span> */}
                  //     </div>
                  //   </div>
                  // </div>

                  //........................................................................

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
                          // paddingBottom : "20px"
                          // marginLeft: "2%",
                          // width: "auto"
                          width: 200,


                        }}
                        // lassName='Asilder'
                        className="cardSli"
                      // onClick={() => dataPass(data)}
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
                                {/* <h6 style={{ fontWeight: "bold", fontSize: "12px", color: 'white', textAlign: 'center' }}>Sale</h6> */}
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
                              style={{
                                objectFit: "contain",
                                marginTop: "30px",
                                color: "#494949",
                              }}
                            />

                            <div className="artypo">
                              {/* <Typography variant="body2" gutterBottom component="span"> */}
                              {data.name}
                              {/* </Typography> */}
                            </div>
                            {/* <div className="ari-spce-div">


<Typography variant="caption" color="text.secondary">
{data.spec}
</Typography>
</div> */}
                            <div className="disdiv">
                              {/* <span className="spec-ari">{data.spec}</span> */}
                              {/* <span className="rates">Rs: {data.flashData.rate}</span> */}
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
                              {/* <div className="discountf">
        <span className="disratef">RS.{data.flashData.rate}</span>
        <span className="disperf">-{data.discountPercenage}%</span>
      </div> */}
                            </div>
                            {/* </CardActionArea> */}
                          </>
                        </Link>
                      </Card>
                    </div>
                  ) : null
                //               <>
                //                 <CardMedia
                //                   component="img"
                //                   height="200"
                //                   width='150'
                //                   image={data.image}
                //                   alt="green iguana"
                //                   className="cardSli-M"
                //                 />
                //                 <CardContent>
                //                   <div className="artypo">

                //                     <Typography variant="body2" gutterBottom component="span">
                //                       {data.name}
                //                     </Typography>
                //                   </div>
                //                   {/* <div className="ari-spce-div">

                //   <Typography variant="caption" color="text.secondary">
                //   {data.spec}
                //   </Typography>
                // </div> */}
                //                   <div className="disdiv">

                //                     {/* <span className="spec-ari">{data.spec}</span> */}
                //                     {/* <span className="rates">Rs: {data.flashData.rate}</span> */}
                //                     <div className="discount-f">

                //                       <span
                //                         style={{ color: "red", fontWeight: "bold" }}
                //                         className="textf"
                //                       >
                //                         {data.discountPrice ?
                //                           <>
                //                             Rs: {data.discountPrice}
                //                           </>
                //                           :
                //                           <>
                //                             Rs: {data.rate}
                //                           </>
                //                         }
                //                       </span>
                //                     </div>
                //                     {data.discountPrice ?
                //                       <div className="discountf">
                //                         <span className="disratef" >
                //                           {data.discountPrice ? <>
                //                             RS.{data.rate}
                //                           </>
                //                             :
                //                             <>
                //                               RS.{data.discountPrice}
                //                             </>
                //                           }
                //                         </span>
                //                         <span className="disperf" >-{data.discountPercentage}%</span>
                //                       </div> : null
                //                     }
                //                     {/* <div className="discountf">
                //                       <span className="disratef">RS.{data.flashData.rate}</span>
                //                       <span className="disperf">-{data.discountPercenage}%</span>
                //                     </div> */}
                //                   </div>
                //                 </CardContent>
                //               </>
              )}
          </div>
        </div>
      ) :
        (
          <h2 style={{ textAlign: 'center' }}>No Product Found!</h2>
        )}
      {/* <div>
                {isPLoad &&
                    <div style={{ textAlign: 'center !important', marginLeft: '50%', marginTop: '3%' }}>

                        <CircularProgress
                            // style={{ margin: '3% 3%' }} 
                            disableShrink />
                    </div>
                }
                {!isEmpty && !isPLoad &&
                    // <button onClick={fetchMore}>
                    //   More
                    // </button>
                    <Stack
                        // spacing={2}
                        // direction="row"
                        style={{ margin: '3% 5%' }}
                    >
                        <Button
                            // variant="contained" 
                            className="btnLog-2" onClick={fetchMore}>
                            Load More
                        </Button>
                    </Stack>
                }
            </div> */}
    </>
  );

};
