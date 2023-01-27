import React, { useEffect, useState } from "react";
import Silder from "../../component/Silder/Silder";
import "./Home.css";
import ClipLoader from "react-spinners/ClipLoader";
// import FlashSale from "../FlashSale/FlashSale"
import ArrivalSilder from "../../component/arrivalSilder/ArrivalSilder";
// import Footer from "../../component/footer/Footer";
// import { FlashSlider } from "../../component/flashsale/FlashSlider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircularProgress from "@mui/material/CircularProgress";
import {
  collection,
  limit,
  onSnapshot,
  query,
  startAfter,
} from "firebase/firestore";
import db from "../../database/firebase";
import "../../component/PopularHighlight/style.css";

import { useHistory } from "react-router-dom";

import ExploreBrands from "../../component/ExploreBrands";
import { HomeSecTwo } from "../../component/HomeSecTwo/HomeSecTwo";
import PopularHighlight from "../../component/PopularHighlight";
import FeaturesSection from "../../component/FeaturesSection";
import Slider from "react-slick";
import JuiceBanner from "../../component/arrivalSilder/JuiceBanner";

export default function Home({
  itemSearch,
  isLoad,
  isCatLoad,
  fetchMore,
  isEmpty,
  isPLoad,
}) {
  const history = useHistory();
  const [categoryD, setCategoryD] = React.useState([]);

  const [banner, setBanner] = React.useState([]);


  // const categoryD = useSelector((state) => state.category.initialState);

  const [lastFDocCat, setLastFDocCat] = useState([]);
  const [isFEmptyCat, setIsFEmptyCat] = useState(false);
  const [isFLoadCat, setIsFLoadCat] = useState(false);

  // useEffect(async () => {
  //   const collectionRef = collection(db, "MainCategory");
  //   const q = query(collectionRef, limit(7));

  //   const unsub = onSnapshot(q, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     const lastFDocCat = snapshot.docs[snapshot.docs.length - 1];

  //     setCategoryD(data);
  //     // console.log(categoryD);
  //     len = categoryD.length;
  //     setLastFDocCat(lastFDocCat);
  //   });


  //   return unsub;
  // }, []);
  useEffect(() => {
    const collectionRef = collection(db, "MainCategory");
    const q = query(collectionRef, limit(27));

    const unsub = onSnapshot(q, (snapshot) => {
      var data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const lastFDocCat = snapshot.docs[snapshot.docs.length - 1];

      setCategoryD(data);
      setLastFDocCat(lastFDocCat);
    });


    return unsub;
  }, []);
  // const flashD = useSelector((state) => state.flashSale.initialState);
  const fetchMoreCat = () => {
    setIsFLoadCat(true);

    const collectionRef = collection(db, "MainCategory");
    const q = query(collectionRef, startAfter(lastFDocCat), limit(9));

    const unsub = onSnapshot(q, (snapshot) => {
      const isCollectionEmpty = snapshot.size === 0;
      if (!isCollectionEmpty) {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const lastFDocCat = snapshot.docs[snapshot.docs.length - 1];
        setCategoryD((categoryD) => [...categoryD, ...data]);
        setLastFDocCat(lastFDocCat);
      } else {
        setIsFEmptyCat(true);
      }
      setIsFLoadCat(false);
    });

    return unsub;
  };

  useEffect(async () => {
    const collectionRef = collection(db, "webBanner");
    const q = query(collectionRef);

    const unsub = onSnapshot(q, (snapshot) => {
      let data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (data.length > 0) {
        setBanner(data);
      }
    });
    return unsub;
  }, []);

  const submit = (data) => {
    // console.log('main data', data)
    history.push({
      pathname: "/Categories/" + data.category,
      // search: '?query=abc',
      state: { detail: data },
    });
    // history.push("/ProductDetail", data)
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }




  const crouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 9,
    autoplay: false,
    responsive: [
      {
        breakpoint: 2050,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          nav: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          // nextArrow: <SampleNextArrow />,
          // prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300);
  }, [])
  // console.log("<><><><><", itemSearch)
  return (
    <>
      {
        IsLoading ?
          <div className="load-center">
            <ClipLoader
              color={'red'}
              loading={IsLoading}
              size={100} /> </div>
          :
          (
            <>

              {banner.length > 0 ? (
                <div className="sliderTop">
                  <Silder>
                    {banner.map((item, i) => (
                      <img
                        src={item.image && item.image}
                        key={item.id}
                        style={{ width: "100%", height: "28vw" }}
                        alt="juices"
                      />
                    ))}
                  </Silder>
                </div>
              ) : (
                <div style={{ width: "100%", height: "28vw" }}></div>
              )}
              <main id="main-container ">
                <div className="main">
                  <div className="justify-content-md-center" style={{ width: "100%" }}>
                    {/* <img className="estore" src={estore} alt="estore" /> */}
                    <div className="categoryStyle">
                      <h1 className="heading-cat">Categories</h1>
                      <div className="category categorybackStyle" style={{ marginBottom: "50px" }}>
                        {/* <div className="row1"> */}
                        {/* <Silder>
          {banner.map((item, i) => (
            <img
              src={item.image && item.image}
              key={item.id}
              style={{ width: "100%", height: "28vw" }}
              alt="juices"
            />
          ))}
        </Silder> */}

                        <Slider {...crouselSettings} >
                          {categoryD.map((data, ind) => (

                            <div
                              className="card1"
                              key={ind}
                              onClick={() => submit(data)}
                              style={{ cursor: "pointer" }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                }}
                              >
                                <img width="70%" src={data.image} alt="image" />
                                <div>
                                  <div className="name1">{data.category}</div>
                                  <div className="subname">{data.description}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>


                      {/* <Button
                // onClick={() => {
                //   history.push("/bestSale");
                // }}
                className="btns"
                id="btns"
              >
                Shop more
              </Button> */}
                    </div>
                    {/* <div>
              {isFLoadCat &&

                <div style={{
                  textAlign: 'center !important',
                  // marginLeft: '50%' 
                }}>

                  <CircularProgress disableShrink />
                </div>


              }
              {!isFEmptyCat && !isFLoadCat &&
                // <button
                //   style={{
                //     textAlign: 'center !important',
                //     // marginLeft: '50%' 
                //   }}
                //   onClick={fetchMoreCat}>
                //   More
                // </button>
                <KeyboardArrowDownIcon
                  style={{
                    textAlign: 'center !important',
                    marginTop: '2%',
                    cursor: 'pointer',
                  }}

                  sx={{ height: "50px", width: "50px" }}
                  onClick={fetchMoreCat}
                />
              }
            </div> */}
                    {/* ......................................................... */}
                    {/* <FlashSaleHome /> */}
                    {/* ......................................................... */}
                    {/* <FlashSale /> */}

                    {/* ......................................................... */}
                    {/* <FlashSlider /> */}
                    {/* <BesTimeSale isLoad={isLoad} isCatLoad={isCatLoad} itemSearch={itemSearch} /> */}
                    {/* <RecommendedItems /> */}
                    <PopularHighlight />

                    <ArrivalSilder
                      isPLoad={isPLoad}
                      isEmpty={isEmpty}
                      fetchMore={fetchMore}
                    />
                    <JuiceBanner />

                    <ExploreBrands />
                    {/* <HomeSecOne /> */}
                    {/* <HomeSecTwo /> */}
                  </div>
                </div>
              </main>
            </>
          )
      }

    </>
  );
}
