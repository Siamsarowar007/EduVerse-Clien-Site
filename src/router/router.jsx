import React from 'react';
import RootLayout from '../Layout/RootLayout';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import AddCourse from '../Pages/AddCourse';
import Services from '../Pages/Services';




const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home,
          },
          {
              path:'/register',
              Component: Register,
          },
        {
            path:'/login',
            Component: Login,
        },
        {
          path: '/addCourse',
          Component: AddCourse,
        },
        {
          path: '/services',
          Component: Services ,
        },
    ]
  },
]);

export default router;