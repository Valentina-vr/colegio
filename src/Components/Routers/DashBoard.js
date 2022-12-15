import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from '../Vista/Home';
import { Areas } from '../Vista/Areas';
import { Salones } from '../Vista/Salones';
import { Oficinas } from '../Vista/Oficinas';
import { Profesores } from '../Vista/Profesores';
import { Administrativos } from '../Vista/Administrativos';
import { AboutUs } from '../Vista/AboutUs';
import { Navbar } from '../iu/Navbar';
import { Empleados } from '../Vista/Empleados';
import InformeController from '../Controller/InformeController';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Areas" element={<Areas />} />
                <Route path="Salones" element={<Salones />} />
                <Route path="Oficinas" element={<Oficinas />} />
                <Route path="Empleados" element={<Empleados />} />
                <Route path="Profesores" element={<Profesores />} />
                <Route path="Administrativos" element={<Administrativos />} />
                <Route path="InformeController" element={<InformeController />} />
                <Route path="AboutUs" element={<AboutUs />} />
            </Routes>
        </>
    )
}

export default DashboardRoutes;
