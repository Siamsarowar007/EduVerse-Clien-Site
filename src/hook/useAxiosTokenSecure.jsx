import axios from 'axios';
import React from 'react';
import useAuthContext from './useAuthContext';


const axiosInstance = axios.create({
    baseURL: 'https://assignment-11-server-site-ashen.vercel.app/'
})

const useAxiosTokenSecure = () => {
    const {user} =useAuthContext();

    axiosInstance.interceptors.request.use(config=>{
        config.headers.authorization =`Bearer ${user.accessToken}`
        return config;
    })

    return axiosInstance;
};

export default useAxiosTokenSecure;