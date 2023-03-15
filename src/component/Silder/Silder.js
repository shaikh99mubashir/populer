import React, { useState, useEffect } from "react";
// import { Slide } from "react-slideshow-image";
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
// import slide5 from "../../assets/slide5.jpg"
import slide4 from "../../assets/slide4.jpg"
// import slide6 from "../../assets/slide6.jpg"
import slide3 from "../../assets/slide3.jpg"
// import 'react-slideshow-image/dist/styles.css'
// import slider1 from '../../assets/slider1.jpg'
// import { ShopByCategory } from "../ShopByCategory/ShopByCategory";

import './silder.css'
import "../../Changes.css"

import {
  onSnapshot,
  collection,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import db from "../../database/firebase";
import { height } from "@mui/system";
import Flickity from "react-flickity-component";

const Silder = ({ children }) => {
  const [firstLoad, setFirstLoad] = useState(true);


  // const slideImages = [
  //   // <img src={slide1} />,
  //   // <img src={slide2} />,
  //   // <img src={slide3} />,
  //   // "../../assets/slide1.jpg",
  //   // 'import slide2 from "../../assets/slide2.jpg"',
  //   // 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  // ];

  // const [banner, setBanner] = React.useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const collectionRef = collection(db, "webBanner");
  //     const q = query(
  //       collectionRef,
  //     );

  //     const unsub = onSnapshot(q, (snapshot) => {
  //       let data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //       if(data.length>0){
  //         setBanner(data);
  // console.log("data", data)

  //       }
  //     });
  //     return unsub;
  //   })()
  // }, []);
  const flickityOptions = {
    freeScroll: false,
    cellAlign: 'left',
    pageDots: false,
    prevNextButtons: true,
    autoPlay: true,
    wrapAround: false
  }

  return (
    <div className="mainCarousel">

      <Flickity
        className={`carousel `} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate={true}  // default false
        static // default false

      >
        {
          children
        }
      </Flickity>
    </div>
  )
};

export default Silder;