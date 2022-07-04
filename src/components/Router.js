import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../pages/login"
import Register from "../pages/register"

/* import AuthDeliver from '../pages/auth-deliver'; */


const Router = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                </Routes>
            </Fragment>
        </BrowserRouter >
    )
}

export default Router;