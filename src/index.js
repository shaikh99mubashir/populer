import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/styles';
import theme from './theme';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Store/Reducers/userReducer';
import productReducer from './Store/Reducers/productReducer';
import mainCategoryReducer from './Store/Reducers/mainCategoryReducer';
import userGetReducer from './Store/Reducers/userGetReducer';
import flashSaleReducer from './Store/Reducers/flashSaleReducer';
import arrivalReducer from './Store/Reducers/arrivalReducer';
import bestReducer from './Store/Reducers/bestReducer';
import cartReducer from './Store/Reducers/cartReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    category: mainCategoryReducer,
    userGet: userGetReducer,
    userGet: userGetReducer,
    flashSale: flashSaleReducer,
    arrival: arrivalReducer,
    best: bestReducer,
    cart: cartReducer,
  },
})



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
