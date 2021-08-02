// Core
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

// Components
import App from './App';

// Styles
import './index.css';
import PostsContextProvider from "./store/post-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PostsContextProvider>
        <App/>
      </PostsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
