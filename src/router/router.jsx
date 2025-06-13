import React from 'react';
import RootLayout from '../Layout/RootLayout';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import AddCourse from '../Pages/AddCourse';
import Services from '../Pages/Services';
import CourseDetails from '../Pages/CourseDetails/CourseDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../Shared/ErrorPage';
import MyEnrollments from '../Pages/MyEnrollments/MyEnrollments';
import StudentFeedback from '../Pages/StudentFeedback/StudentFeedback';
import EditCourse from '../Pages/EditCourse/EditCourse';
import ManageCourses from '../Pages/ManageCourse/ManageCourses';






const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        // errorElement: <ErrorPage />,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/addCourse',
        element: <PrivateRoute>
          <AddCourse></AddCourse>
        </PrivateRoute>,
      },
      {
        path: '/courses/:id',
        element: <CourseDetails></CourseDetails>
        ,
        // element: <PrivateRoute>
        //   <CourseDetails></CourseDetails>
        // </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path: '/manageCourses',
        element: <PrivateRoute>
          <ManageCourses></ManageCourses>
        </PrivateRoute>,
      },
      // {
      //   path: '/editCourse/:id',
      //   element: 
      // },
      {
        path: '/myEnrollments',
        element: <PrivateRoute>
          <MyEnrollments></MyEnrollments>
        </PrivateRoute>
      },
      {
        path: '/editCourse/:id',
        element: <PrivateRoute>
          <EditCourse></EditCourse>
        </PrivateRoute>
      },
      {
        path: '/feedback',
        Component: StudentFeedback,
      },
      {
        path: '/services',
        Component: Services,
      },
      {
        path: '/*',
        Component: ErrorPage,
      },
    ]
  },
]);

export default router;