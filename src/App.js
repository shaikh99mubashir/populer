import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './component/footer/footer.css'
// import './component/flashsale/sale.css'
// import './component/bestimesale/bestime.css'
import {
  Route,
  // HashRouter as Router,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import MenuAppBar from './component/AppBar';
import NavBar from './component/NavBar';
// import Silder from './component/Silder/Silder';
import Home from './screens/Home/Home';
import { Policy } from './screens/Policy';
import NewArrival from './screens/NewArrival/NewArrival';
import BestSaleItem from './screens/BestSaleItem/BestSaleItem';
import Categories from './screens/Categories/Categories';
import FlashSale from './screens/FlashSale/FlashSale';
// import Recommendeditems from './screens/Recommendeditems/Recommendeditems';
import { Login } from './screens/Login/Login';
import { Register } from './screens/Register/Register';
import { AddToCart } from './screens/AddToCart/AddToCart';
import { ProductDetail } from './component/ProductDetail/ProductDetail';
import { FlashProductDetail } from './component/ProductDetail/FlashProductDetail';
import { Search } from './screens/Search/Search';
import Footer from "./component/footer/Footer"
import Payment from './component/Payment/Payment'

import { PageNotFound } from "./screens/PageNotFound";
import CheckOut from "./screens/CheckOut/CheckOut";
import { ResetPassword } from "./screens/Login/ResetPassword"
import { Thanks } from "./screens/Thanks";
import { Placeorder } from "./screens/PlaceOrder/Placeorder";
// import { useHistory } from "react-router-dom";
import {
  onSnapshot,

  collection,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import {
  getAuth,
  // signInWithEmailAndPassword,
  onAuthStateChanged,
  // signOut,
} from "firebase/auth";
import db from "./database/firebase";
import {
  useDispatch,
  useSelector
} from "react-redux";
import { productData } from "./Store/Reducers/productReducer";
import { arrivalData } from "./Store/Reducers/arrivalReducer";
import { bestData } from "./Store/Reducers/bestReducer";
import { flashSaleData } from "./Store/Reducers/flashSaleReducer";
import { categoryData } from "./Store/Reducers/mainCategoryReducer";
import { loginUserGet } from "./Store/Reducers/userGetReducer";
import { loginUser } from "./Store/Reducers/userReducer";
import DotLoader from "react-spinners/DotLoader";
import MainNavBar from './component/MainNavBar';
import { cartData } from './Store/Reducers/cartReducer';
import Contact from '../src/screens/Contact'
import Blogs from '../src/screens/Blogs'
import Aboutus from '../src/screens/Aboutus'
import BlogsDetail from './screens/BlogsDetail';


// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// import { dataCalling } from './database/dataCalling';
// import under from './assets/logo.png'
function App() {
  const [itemSearch, setItemSearch] = useState("");
  // dataCalling()
  // const history = useHistory();
  const [isLoad, setIsLoad] = useState(true)
  const [isCatLoad, setIsCatLoad] = useState(true)


  const dispatch = useDispatch();






  // ............Product...................................................


  const [lastDoc, setLastDoc] = useState([]);

  const [isEmpty, setIsEmpty] = useState(false)
  const [isPLoad, setIsPLoad] = useState(false)

  useEffect(() => {
    async function fetchFunc() {
      const collectionRef = collection(db, "product");
      const q = query(collectionRef,
        where("quantity", ">=", 0),
        // orderBy("quantity"),
        // orderBy('name', 'desc'),
        limit(5)
      );
      const unsub = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const lastDoc = snapshot.docs[snapshot.docs.length - 1];
        // setBestSale(data);
        // data.map((data) => {
        //   data.quantity == 0 ? null :
        //     dispatch(productData(data))
        // }
        // )
        dispatch(productData(data))
        // setIsLoad(false)
        setLastDoc(lastDoc);
      });

      return unsub;
    }
    fetchFunc();
  }, []);

  const productD = useSelector((state) => state.product.initialState);

  const fetchMore = () => {
    setIsPLoad(true)
    // useEffect(async () => {
    const collectionRef = collection(db, "product");
    const q = query(collectionRef,
      where("quantity", '>', 0),
      // orderBy("quantity"),
      // orderBy('name', 'desc'),
      startAfter(lastDoc),
      limit(5)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const isCollectionEmpty = snapshot.size === 0;
      if (!isCollectionEmpty) {

        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const lastDoc = snapshot.docs[snapshot.docs.length - 1];
        // setBestSale(bestSale => [...bestSale, ...data]);
        // data.map((data) => {
        //   data.quantity == 0 ? null :
        //     dispatch(productData([...productD, ...data]))
        // })

        dispatch(productData([...productD, ...data]))
        // setIsLoad(false)
        setLastDoc(lastDoc);
      } else {
        setIsEmpty(true);
      }
      setIsPLoad(false)
    });

    return unsub;
    // }, []);


  }





  const cartCheck = useSelector((state) => state.cart.initialState);

  useEffect(() => {
    let data = localStorage.getItem('cart');

    if (data) {
      // let a = local.cart.length
      // console.log(product[0].id);
      // for (let i = 0; i < a; i++) {
      // local = JSON.parse(localStorage.getItem('cart'));
      // if(product[0].id !== local.cart[i].id){
      let oldCart = JSON.parse(data);
      // oldCart.cart.push(product[0]);
      // localStorage.setItem("cart", JSON.stringify(oldCart))
      dispatch(cartData(oldCart))
      // }else{
      // }
      // }
      // console.log(oldCart.cart[i].id);
    } else {
      // console.log('check else ');
    }
  }, [])



  // ............New Arrivals...................................................






  const [lastDocA, setLastDocA] = useState([]);

  const [isEmptyA, setIsEmptyA] = useState(false)
  const [isLoadA, setIsPLoadA] = useState(false)

  useEffect(() => {
    async function fetchFunc() {
      const collectionRef = collection(db, "product");
      const q = query(collectionRef,
        where("quantity", '>', 0),
        // orderBy("quantity"),
        // orderBy('name', 'desc'),
        where("subcat1", '==', 'NewArrival'),
        // orderBy("subcat1", "asc"),
        limit(20)
      );

      const unsub = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const lastDocA = snapshot.docs[snapshot.docs.length - 1];
        // setBestSale(data);
        dispatch(arrivalData(data))
        // setIsLoad(false)
        setLastDocA(lastDocA);
      });
      return unsub;
    }
    fetchFunc();
  }, []);

  const arrivalD = useSelector((state) => state.arrival.initialState);



  const fetchMoreA = () => {
    setIsPLoadA(true)
    // useEffect(async () => {
    const collectionRef = collection(db, "product");
    const q = query(collectionRef,
      where("quantity", '>', 0),
      // orderBy("quantity"),
      // orderBy('name', 'desc'),
      where("subcat1", '==', 'NewArrival'),
      orderBy("subcat1", "asc"),
      startAfter(lastDocA),
      limit(20)
    );
    // console.log("new Arrival data");
    // console.log(q);
    const unsub = onSnapshot(q, (snapshot) => {
      const isCollectionEmpty = snapshot.size === 0;
      if (!isCollectionEmpty) {

        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        const lastDocA = snapshot.docs[snapshot.docs.length - 1];
        // setBestSale(bestSale => [...bestSale, ...data]);
        dispatch(arrivalData([...arrivalD, ...data]))
        // setIsLoad(false)
        setLastDocA(lastDocA);
      } else {
        setIsEmptyA(true);
      }
      setIsPLoadA(false)
    });

    return unsub;
    // }, []);
  }









  // ............Best Sale...................................................






  const [lastDocB, setLastDocB] = useState([]);

  const [isEmptyB, setIsEmptyB] = useState(false)
  const [isLoadB, setIsPLoadB] = useState(false)

  const bestD = useSelector((state) => state.best.initialState);
  useEffect(() => {
    async function fetchFunc() {
      const collectionRef = collection(db, "product");
      const q = query(collectionRef,
        // where("quantity", '>', 0),
        // orderBy("quantity"),
        where("subcat", '==', 'BestSaleItem'),
        // orderBy("subcat", 'desc'),
        limit(40)
      );

      const unsub = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const lastDocB = snapshot.docs[snapshot.docs.length - 1];
        // setBestSale(data);
        dispatch(bestData(data))
        setIsLoad(false)
        setLastDocB(lastDocB);
      });

      return unsub;
    }
    fetchFunc();
  }, []);


  const fetchMoreB = () => {
    setIsPLoadB(true)
    // useEffect(async () => {
    const collectionRef = collection(db, "product");
    const q = query(collectionRef,
      // where("quantity", '>', 0),
      // orderBy("quantity"),
      where("subcat", '==', 'BestSaleItem'),
      // orderBy("subcat", 'desc'),
      startAfter(lastDocB),
      limit(20)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const isCollectionEmpty = snapshot.size === 0;
      if (!isCollectionEmpty) {

        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const lastDocB = snapshot.docs[snapshot.docs.length - 1];
        // setBestSale(bestSale => [...bestSale, ...data]);
        dispatch(bestData([...bestD, ...data]))
        // setIsLoad(false)
        setLastDocB(lastDocB);
      } else {
        setIsEmptyB(true);
      }
      setIsPLoadB(false)
    });

    return unsub;
    // }, []);


  }







  // ............Flash Product...................................................


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, []);

  const [lastFDoc, setLastFDoc] = useState([]);
  const [isFEmpty, setIsFEmpty] = useState(false)
  const [isFLoad, setIsFLoad] = useState(false)

  useEffect(() => {
    async function fetchFunc() {
      const collectionRef = collection(db, "timesale");
      const q = query(
        collectionRef,
        where("quantity", '>', 0),
        orderBy("quantity"),
        orderBy("name", "asc"),
        limit(20)
      );

      const unsub = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const lastFDoc = snapshot.docs[snapshot.docs.length - 1];
        // setProduct(data);
        dispatch(flashSaleData(data))
        setLastFDoc(lastFDoc);
      });

      return unsub;
    }
    fetchFunc();
  }, []);


  const flashD = useSelector((state) => state.flashSale.initialState);
  const flashMore = () => {
    setIsFLoad(true)

    const collectionRef = collection(db, "timesale");
    const q = query(
      collectionRef,
      where("quantity", '>', 0),
      orderBy("quantity"),
      orderBy("name", "asc"),
      startAfter(lastFDoc),
      limit(20)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const isCollectionEmpty = snapshot.size === 0;
      if (!isCollectionEmpty) {
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const lastFDoc = snapshot.docs[snapshot.docs.length - 1];
        // setProduct(data);
        dispatch(flashSaleData([...flashD, ...data]))
        setLastFDoc(lastFDoc);
      }
      else {
        setIsFEmpty(true);
      }
      setIsFLoad(false)

    });

    return unsub;

  }



  // ............Main Category...................................................




  useEffect(() => {
    async function fetchFunc() {
      const collectionProduct = collection(db, "MainCategory");

      const unsub = onSnapshot(collectionProduct, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        // setProduct(data);
        dispatch(categoryData(data))
        setIsCatLoad(false)
      });

      return unsub;
    }
    fetchFunc();
  }, []);









  //........................................................................................





  useEffect(() => {
    const collectionProduct = collection(db, "userData");

    const unsub = onSnapshot(collectionProduct, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(loginUserGet(data));
    });

    return unsub;
  }, []);









  // ............Cart & Userss...................................................







  const [cartCount, setCartCount] = useState([]);


  const udata = useSelector((state) => state.user.initialState);

  // let dataInLocal = JSON.parse(localStorage.getItem('cart'));
  // console.log("dataInLocal = ", dataInLocal.cart.length);

  useEffect(() => {
    async function fetchFunc() {
      // const collectionRef = collection(db, `${udata.id}`);
      const collectionRef = collection(db, 'addToCart');
      const q = query(collectionRef);

      const unsub = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setCartCount(data);
      });

      return unsub;
    }

    fetchFunc();

  }, []);

  const [userState, setUserState] = React.useState();

  const product = useSelector((state) => state.userGet.initialState);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if (product) {
        product.map((data) => {
          if (data.email == user.email) {
            dispatch(loginUser(data));
          }
        });
      }
      setUserState(true);
    } else {
      setUserState(false);
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
    // productD ? setLoading(false) : setLoading(true)

  }, [])



  //.................Register......................................................





  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  }, [])

  return (
    <>
      {
        loading ?
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              backgroundColor: '#000',
              height: '100vh',
            }}
          >

            <DotLoader
              color={"red"}
              loading={loading}
              size={100}
            />
          </div>
          :
          <>
            {/* <div style={{ textAlign: 'center', width: "350px", margin: '30px auto' }}>
      
      <img style={{ backgroundSize: 'contain' }} src={under} />
      <h1>Website Under Maintenance</h1>
    </div> */}
            <Router className='container'>
              <MainNavBar cartCount={cartCount} setItemSearch={setItemSearch} />
              <Switch>
                <Route exact path='/search' >
                  <Search itemSearch={itemSearch} />
                </Route>
                <Route exact path='/' >
                  <Home isPLoad={isPLoad} isEmpty={isEmpty} fetchMore={fetchMore} isLoad={isLoad} isCatLoad={isCatLoad} itemSearch={itemSearch} />
                </Route>
                <Route exact path='/policy' >
                  <Policy />
                </Route>

                <Route exact path='/newArrival'  >
                  <NewArrival fetchMoreA={fetchMoreA} isEmptyA={isEmptyA} isLoadA={isLoadA} />
                </Route>

                <Route exact path='/bestSale'  >
                  <BestSaleItem isLoadB={isLoadB} isEmptyB={isEmptyB} fetchMoreB={fetchMoreB} />
                </Route>
                <Route exact path='/flashSale'>
                  <FlashSale isFLoad={isFLoad} isFEmpty={isFEmpty} flashMore={flashMore} />
                </Route>
                <Route exact path='/Login'  >
                  <Login userState={userState} />
                </Route>
                <Route exact path='/Register' component={Register} />
                <Route exact path='/AddToCart' >
                  <AddToCart cartCount={cartCount} />
                </Route>
                <Route exact path='/ProductDetail/:productName'>
                  <ProductDetail cartCount={cartCount} />
                </Route>
                <Route exact path='/FlashProductDetail' component={FlashProductDetail} />
                <Route exact path='/Payment' component={Payment} />
                <Route exact path='/CheckOut' component={CheckOut} />
                <Route exact path='/Categories/:categoryName' component={Categories} />
                <Route exact path='/Thanks' component={Thanks} />
                <Route exact path='/ResetPassword' component={ResetPassword} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Blogs' component={Blogs} />
                <Route exact path='/BlogsDetail' component={BlogsDetail} />
                <Route exact path='/Aboutus' component={Aboutus} />
                <Route exact path='/PlaceOrder' component={Placeorder} />
                <Route component={PageNotFound} />
              </Switch>
              <Footer />
            </Router>
          </>
      }
    </>
  );
}

export default App;
