import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import HomeLayout from './components/Layout/HomeLayout';
import { loader } from './util/loader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: loader
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader: ()=> fetch('/statisticPage.json')

      },
      {
        path:'/appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:loader
      
      },
      {
        path:'/blog',
        element:<Blog></Blog>
        
      },
      {
        path:'/JobDetails/:id',
        element:<JobDetails></JobDetails>,
        loader:   loader

      }
    ]
   
  }
  
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
