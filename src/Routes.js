import React from "react";
import {Route, Routes } from "react-router-dom";
import Error from "./pages/404"

// Home
import Home from "./pages/home";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default Routers;