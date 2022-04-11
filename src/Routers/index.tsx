import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';

     const AppRoutes = (): JSX.Element =>{

        return (
            <Routes>
                <Route  path="/"  element={<Home/>} />
                <Route path="/test"  element={<Home/>} />
                <Route path="*"  element={<Home/>} />
            </Routes>
        )   
     }

     export default AppRoutes;