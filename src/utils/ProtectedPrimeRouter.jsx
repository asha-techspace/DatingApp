import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedPrimeRouter = ({ children, isAuthenticated, isPrime }) => {

    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }
    if(!isPrime) {
        return <Navigate to={"/subscription"} />;
    }
    if (isPrime && isAuthenticated) {
        return children;
    }

};

export default ProtectedPrimeRouter;