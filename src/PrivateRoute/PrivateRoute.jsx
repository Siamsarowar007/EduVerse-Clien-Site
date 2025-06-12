import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import {  Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading} =use(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)

       if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-infinity loading-xl"></span>
            </div>
        );
    }

    if (!user) {
       return <Navigate to='/login' state={location.pathname}></Navigate>
    }


    return children;
};

export default PrivateRoute;