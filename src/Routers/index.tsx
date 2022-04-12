import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import { Car } from '../Pages/Car';
import { Home } from '../Pages/Home';
     const AppRoutes = (): JSX.Element =>{

        return (
            <Routes>
                <Route  path="/"  element={<Home/>} />
                <Route path="/car"  element={<Car/>} />
                <Route path="*"  element={<Home/>} />
            </Routes>
        )   
     }

     export default AppRoutes;