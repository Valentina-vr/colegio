import React from 'react';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { DashboardRoutes } from './DashBoard';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}