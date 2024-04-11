import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import store from './Store/store';
import {Provider} from 'react-redux'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Show from './Components/Show';
import Country from './Components/Country';
import NoResultsFound from './Components/NoResultsFound';
import AboutUs from './Components/AboutUs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/countries",
        element: <Show/>,
      },
      {
        path: "/country",
        element:<Country/>
      },
      {
        path:"/notFound",
        element:<NoResultsFound/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      }
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
