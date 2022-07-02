import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../pages/login"
/* import AuthDeliver from '../pages/auth-deliver'; */


const Router = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route index path="/" element={<Login />} /> 
                </Routes>
            </Fragment>
        </BrowserRouter >
    )
}

export default Router;