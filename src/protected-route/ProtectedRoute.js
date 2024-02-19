import React from 'react'
import { CreateAuth } from '../components/context-api/Auth'
import Signup from '../pages/auth/Signup';
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children, isUserLoggin }) {

    return (
        isUserLoggin ? <div >{children}</div> : <Navigate to='/auth/login' />
    )
}
