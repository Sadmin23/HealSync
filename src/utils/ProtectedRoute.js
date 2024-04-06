import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Layout from '../shared/Layout';

const PrivateRoute = ({ userType, allowedUserTypes}) => {

    let nav = userType === 'Doctor' ? '/doctor' : userType === 'Nurse' ? '/nurse' : userType ==='Patient' ? '/patient' : userType === 'Admin' ? '/admin' : '/';

    if (!allowedUserTypes.includes(userType)) {
        return <Navigate to={nav} replace />;
    }

    return <Layout/>;
};

export default PrivateRoute;