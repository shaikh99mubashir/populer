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

var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?62251';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
  "enabled": true,
  "chatButtonSetting": {
    "backgroundColor": "#4dc247",
    "ctaText": "",
    "borderRadius": "25",
    "marginLeft": "0",
    "marginBottom": "50",
    "marginRight": "50",
    "position": "right"
  },
  "brandSetting": {
    "brandName": "Popular Foods",
    "brandSubTitle": "Typically replies within a day",
    "brandImg": "https://popularfoods.pk/static/media/logo.215ce8a7d22b42b2fd7c.png",
    "welcomeText": "Hi there!\nHow can I help you?",
    "messageText": "Hello, I have a question about {{page_link}}",
    "backgroundColor": "#0a5f54",
    "ctaText": "Start Chat",
    "borderRadius": "25",
    "autoShow": false,
    "phoneNumber": "923481732451"
  }
};
// s.onload = function () {
//   CreateWhatsappChatWidget(options);
// };

var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);




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
